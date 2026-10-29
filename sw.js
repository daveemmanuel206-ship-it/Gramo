// Service Worker GRAMO — permet l'installation (icône sur l'écran) et un accès hors-ligne basique
const CACHE_NAME = 'gramo-v2';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    './images/icon-192.png',
    './images/icon-512.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(ASSETS).catch(function() {
                // Si un fichier manque (ex: images/*.gif pas listées), on n'empêche pas l'installation
            });
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(
                keys.filter(function(key) { return key !== CACHE_NAME; })
                    .map(function(key) { return caches.delete(key); })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    // Réseau en priorité (toujours la dernière version du site),
    // le cache ne sert que de secours si hors-ligne.
    event.respondWith(
        fetch(event.request).then(function(response) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
                cache.put(event.request, copy);
            });
            return response;
        }).catch(function() {
            return caches.match(event.request);
        })
    );
});
