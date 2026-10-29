
// Splash screen
window.addEventListener('load', function() {
    const splash = document.getElementById('splash');
    setTimeout(function() {
        splash.classList.add('hide');
    }, 1800);
});

// PWA : enregistrement du service worker (nécessaire pour l'installation sur l'écran)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').catch(function() {
            // Pas grave si ça échoue (ex: ouverture directe du fichier sans serveur local) :
            // le site continue de fonctionner normalement, seule l'installation ne sera pas proposée.
        });
    });
}

// ══════════════════════════════
// AVATARS ILLUSTRÉS — 7 persos GRAMO
// ══════════════════════════════
const avatarsData = [
    {
        id: 0, name: 'Koffi',
        svg: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
  <rect width="120" height="160" fill="#FF6B2B"/>
  <path d="M0 100 L60 80 L120 100 L120 160 L0 160Z" fill="#E85520" opacity="0.5"/>
  <path d="M22 105 Q60 93 98 105 L102 160 L18 160Z" fill="white" stroke="#0A0A0A" stroke-width="3"/>
  <path d="M50 105 L60 118 L70 105" fill="none" stroke="#0A0A0A" stroke-width="2.5"/>
  <text x="60" y="145" text-anchor="middle" font-size="9" fill="#FF6B2B" font-weight="900" font-family="Arial Black" opacity="0.8">GRAMO</text>
  <path d="M22 110 Q4 106 2 90 Q0 78 10 76 Q18 74 20 84 L24 105Z" fill="#7A4520" stroke="#0A0A0A" stroke-width="3"/>
  <path d="M8 74 Q4 60 8 55 Q12 50 16 55 L14 72Z" fill="#7A4520" stroke="#0A0A0A" stroke-width="2.5"/>
  <path d="M16 71 Q14 56 18 51 Q22 46 26 51 L22 70Z" fill="#7A4520" stroke="#0A0A0A" stroke-width="2.5"/>
  <path d="M22 74 Q22 62 26 58 Q30 54 33 59 L30 74Z" fill="#7A4520" stroke="#0A0A0A" stroke-width="2.5"/>
  <path d="M28 78 Q30 68 34 66 Q38 64 39 69 L36 78Z" fill="#7A4520" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="14" y="68" width="8" height="4" rx="2" fill="#FFD600" stroke="#0A0A0A" stroke-width="1.5"/>
  <path d="M98 110 Q116 106 118 90 Q120 78 110 76 Q102 74 100 88 L96 105Z" fill="#7A4520" stroke="#0A0A0A" stroke-width="3"/>
  <rect x="48" y="88" width="24" height="18" rx="5" fill="#7A4520" stroke="#0A0A0A" stroke-width="2.5"/>
  <path d="M30 105 Q60 120 90 105" fill="none" stroke="#0A0A0A" stroke-width="5" stroke-linecap="round"/>
  <path d="M30 105 Q60 120 90 105" fill="none" stroke="#FFD600" stroke-width="3" stroke-linecap="round"/>
  <circle cx="60" cy="119" r="9" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <text x="60" y="122.5" text-anchor="middle" font-size="7" fill="#0A0A0A" font-weight="900">G</text>
  <path d="M28 72 Q28 35 60 32 Q92 35 92 72 Q92 90 80 95 Q60 100 40 95 Q28 90 28 72Z" fill="#7A4520" stroke="#0A0A0A" stroke-width="3"/>
  <path d="M36 80 Q36 92 60 95 Q84 92 84 80" fill="#6A3A10" stroke="#0A0A0A" stroke-width="2"/>
  <ellipse cx="60" cy="45" rx="36" ry="30" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="3"/>
  <ellipse cx="30" cy="58" rx="18" ry="22" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2.5"/>
  <ellipse cx="90" cy="58" rx="18" ry="22" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2.5"/>
  <ellipse cx="60" cy="32" rx="26" ry="16" fill="#0D0D0D"/>
  <rect x="88" y="30" width="5" height="22" rx="2.5" fill="#FFD600" stroke="#0A0A0A" stroke-width="1.5"/>
  <rect x="84" y="29" width="14" height="5" rx="2.5" fill="#FFD600" stroke="#0A0A0A" stroke-width="1.5"/>
  <rect x="36" y="60" width="20" height="13" rx="6" fill="white" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="64" y="60" width="20" height="13" rx="6" fill="white" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="36" y="60" width="20" height="7" rx="5" fill="#0D0D0D"/>
  <rect x="64" y="60" width="20" height="7" rx="5" fill="#0D0D0D"/>
  <circle cx="46" cy="70" r="4.5" fill="#0D0D0D"/>
  <circle cx="74" cy="70" r="4.5" fill="#0D0D0D"/>
  <circle cx="48" cy="68" r="1.8" fill="white"/>
  <circle cx="76" cy="68" r="1.8" fill="white"/>
  <path d="M34 58 Q46 54 58 58" stroke="#0D0D0D" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M62 58 Q74 54 86 58" stroke="#0D0D0D" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M54 75 Q60 80 66 75" fill="none" stroke="#0A0A0A" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="54" cy="75" r="3.5" fill="#6A3A10" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="66" cy="75" r="3.5" fill="#6A3A10" stroke="#0A0A0A" stroke-width="1.5"/>
  <path d="M44 84 L76 84" stroke="#0A0A0A" stroke-width="3" stroke-linecap="round"/>
  <path d="M44 84 Q60 89 76 84" fill="#5A2A08" stroke="none"/>
  <circle cx="29" cy="72" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <circle cx="91" cy="72" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <path d="M40 86 Q60 92 80 86" fill="none" stroke="#3A1A00" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
</svg>`
    },
    {
        id: 1, name: 'Aya',
        svg: `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
  <rect width="120" height="140" fill="#FF4E8B"/>
  <path d="M60 8 L100 18 L115 55 L100 95 L60 102 L20 95 L5 55 L20 18Z" fill="#D63070" opacity="0.4"/>
  <path d="M22 95 Q60 82 98 95 L98 140 L22 140Z" fill="#8B5CF6" stroke="#0A0A0A" stroke-width="3"/>
  <circle cx="43" cy="112" r="5" fill="#FF4E8B" stroke="#0A0A0A" stroke-width="2"/>
  <circle cx="60" cy="120" r="5" fill="#FF4E8B" stroke="#0A0A0A" stroke-width="2"/>
  <circle cx="77" cy="112" r="5" fill="#FF4E8B" stroke="#0A0A0A" stroke-width="2"/>
  <path d="M22 100 Q5 108 7 128 Q9 136 20 133 Q24 131 24 122Z" fill="#8B5A2B" stroke="#0A0A0A" stroke-width="3"/>
  <path d="M98 100 Q115 108 113 128 Q111 136 100 133 Q96 131 96 122Z" fill="#8B5A2B" stroke="#0A0A0A" stroke-width="3"/>
  <rect x="44" y="80" width="32" height="17" rx="4" fill="#8B5A2B" stroke="#0A0A0A" stroke-width="2.5"/>
  <path d="M30 98 Q60 113 90 98" fill="none" stroke="#0A0A0A" stroke-width="5"/>
  <path d="M30 98 Q60 113 90 98" fill="none" stroke="#FFD600" stroke-width="3" stroke-dasharray="5,3"/>
  <circle cx="60" cy="112" r="7" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <text x="60" y="115.5" text-anchor="middle" font-size="6" fill="#0A0A0A" font-weight="900">★</text>
  <ellipse cx="60" cy="56" rx="27" ry="29" fill="#8B5A2B" stroke="#0A0A0A" stroke-width="3"/>
  <circle cx="35" cy="40" r="19" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2.5"/>
  <circle cx="85" cy="40" r="19" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2.5"/>
  <ellipse cx="60" cy="33" rx="17" ry="12" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2"/>
  <circle cx="35" cy="54" r="6" fill="#FF4E8B" stroke="#0A0A0A" stroke-width="2.5"/>
  <circle cx="85" cy="54" r="6" fill="#FF4E8B" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="37" y="51" width="18" height="12" rx="6" fill="white" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="65" y="51" width="18" height="12" rx="6" fill="white" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="37" y="51" width="18" height="6" rx="4" fill="#0D0D0D"/>
  <rect x="65" y="51" width="18" height="6" rx="4" fill="#0D0D0D"/>
  <circle cx="46" cy="60" r="4" fill="#0D0D0D"/>
  <circle cx="74" cy="60" r="4" fill="#0D0D0D"/>
  <circle cx="48" cy="58" r="1.5" fill="white"/>
  <circle cx="76" cy="58" r="1.5" fill="white"/>
  <line x1="38" y1="52" x2="35" y2="47" stroke="#0D0D0D" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="44" y1="51" x2="42" y2="46" stroke="#0D0D0D" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="52" x2="50" y2="47" stroke="#0D0D0D" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="66" y1="52" x2="64" y2="47" stroke="#0D0D0D" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="72" y1="51" x2="71" y2="46" stroke="#0D0D0D" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="78" y1="52" x2="79" y2="47" stroke="#0D0D0D" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M52 68 Q60 74 68 68" fill="#6B3A18" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round"/>
  <circle cx="53" cy="68" r="3" fill="#6B3A18" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="67" cy="68" r="3" fill="#6B3A18" stroke="#0A0A0A" stroke-width="1.5"/>
  <path d="M43 76 Q60 87 77 76" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2.5"/>
  <path d="M45 76 Q60 84 75 76" fill="#FF4E8B"/>
  <path d="M45 76 Q60 79 75 76" fill="#FF80AB"/>
  <circle cx="31" cy="60" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="29" y="65" width="5" height="8" rx="2.5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2"/>
  <circle cx="89" cy="60" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="87" y="65" width="5" height="8" rx="2.5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2"/>
</svg>`
    },
    {
        id: 2, name: 'Yacou',
        svg: `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
  <rect width="120" height="140" fill="#00D166"/>
  <path d="M60 5 L100 20 L115 60 L95 100 L60 110 L25 100 L5 60 L20 20Z" fill="#009A4F" opacity="0.5"/>
  <rect x="24" y="88" width="72" height="52" rx="6" fill="white" stroke="#0A0A0A" stroke-width="3"/>
  <rect x="57" y="90" width="6" height="50" fill="#E0E0E0" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="48" cy="99" r="4" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="48" cy="112" r="4" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="48" cy="125" r="4" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="1.5"/>
  <rect x="6" y="90" width="18" height="44" rx="9" fill="white" stroke="#0A0A0A" stroke-width="3"/>
  <rect x="96" y="90" width="18" height="44" rx="9" fill="white" stroke="#0A0A0A" stroke-width="3"/>
  <line x1="110" y1="82" x2="118" y2="58" stroke="#8B5A2B" stroke-width="5" stroke-linecap="round"/>
  <circle cx="118" cy="53" r="11" fill="#FFD600" stroke="#0A0A0A" stroke-width="3"/>
  <path d="M115 41 Q118 34 115 28" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.8"/>
  <path d="M120 41 Q123 34 120 28" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.6"/>
  <rect x="44" y="78" width="32" height="14" rx="4" fill="#8B5A2B" stroke="#0A0A0A" stroke-width="2.5"/>
  <path d="M30 90 Q60 104 90 90" fill="none" stroke="#0A0A0A" stroke-width="5"/>
  <path d="M30 90 Q60 104 90 90" fill="none" stroke="#FFD600" stroke-width="3" stroke-dasharray="5,3"/>
  <circle cx="60" cy="103" r="8" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <text x="60" y="106.5" text-anchor="middle" font-size="7" fill="#0A0A0A" font-weight="900">G</text>
  <ellipse cx="60" cy="54" rx="27" ry="29" fill="#8B5A2B" stroke="#0A0A0A" stroke-width="3"/>
  <rect x="32" y="20" width="56" height="26" rx="5" fill="white" stroke="#0A0A0A" stroke-width="2.5"/>
  <ellipse cx="60" cy="20" rx="30" ry="14" fill="white" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="32" y="40" width="56" height="8" rx="3" fill="#E8E8E8" stroke="#0A0A0A" stroke-width="1.5"/>
  <rect x="37" y="50" width="18" height="11" rx="5.5" fill="white" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="65" y="50" width="18" height="11" rx="5.5" fill="white" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="37" y="50" width="18" height="5.5" rx="4" fill="#0D0D0D"/>
  <rect x="65" y="50" width="18" height="5.5" rx="4" fill="#0D0D0D"/>
  <circle cx="46" cy="58" r="4" fill="#0D0D0D"/>
  <circle cx="74" cy="58" r="4" fill="#0D0D0D"/>
  <circle cx="48" cy="56" r="1.5" fill="white"/>
  <circle cx="76" cy="56" r="1.5" fill="white"/>
  <path d="M52 67 Q60 73 68 67" fill="#6B3A18" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round"/>
  <circle cx="53" cy="67" r="3.5" fill="#6B3A18" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="67" cy="67" r="3.5" fill="#6B3A18" stroke="#0A0A0A" stroke-width="1.5"/>
  <path d="M40 75 Q60 88 80 75" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M42 75 Q60 85 78 75" fill="white"/>
  <circle cx="32" cy="58" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <circle cx="88" cy="58" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
</svg>`
    },
    {
        id: 3, name: 'Didier',
        svg: `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
  <rect width="120" height="140" fill="#2962FF"/>
  <path d="M60 5 L105 20 L118 65 L95 105 L60 112 L25 105 L2 65 L15 20Z" fill="#1A3FD0" opacity="0.5"/>
  <path d="M22 92 Q60 78 98 92 L98 140 L22 140Z" fill="#1A1A2E" stroke="#0A0A0A" stroke-width="3"/>
  <path d="M38 92 L50 108 L60 92" fill="#2962FF" stroke="#0A0A0A" stroke-width="2"/>
  <path d="M82 92 L70 108 L60 92" fill="#2962FF" stroke="#0A0A0A" stroke-width="2"/>
  <polygon points="22,106 30,98 30,140 22,140" fill="#2962FF" stroke="#0A0A0A" stroke-width="1.5"/>
  <polygon points="98,106 90,98 90,140 98,140" fill="#2962FF" stroke="#0A0A0A" stroke-width="1.5"/>
  <polygon points="36,118 38,112 40,118 35,115 41,115" fill="#FFD600" stroke="#0A0A0A" stroke-width="1"/>
  <polygon points="84,118 86,112 88,118 83,115 89,115" fill="#FFD600" stroke="#0A0A0A" stroke-width="1"/>
  <path d="M22 98 Q5 106 7 127 Q9 135 20 132 Q24 130 24 120Z" fill="#8B5A2B" stroke="#0A0A0A" stroke-width="3"/>
  <path d="M98 98 Q115 106 113 127 Q111 135 100 132 Q96 130 96 120Z" fill="#8B5A2B" stroke="#0A0A0A" stroke-width="3"/>
  <rect x="44" y="78" width="32" height="16" rx="4" fill="#8B5A2B" stroke="#0A0A0A" stroke-width="2.5"/>
  <path d="M30 95 Q60 110 90 95" fill="none" stroke="#0A0A0A" stroke-width="5"/>
  <path d="M30 95 Q60 110 90 95" fill="none" stroke="#FFD600" stroke-width="3" stroke-dasharray="5,3"/>
  <circle cx="60" cy="109" r="9" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <text x="60" y="113" text-anchor="middle" font-size="6" fill="#0A0A0A" font-weight="900">NMD</text>
  <ellipse cx="60" cy="54" rx="27" ry="29" fill="#8B5A2B" stroke="#0A0A0A" stroke-width="3"/>
  <ellipse cx="60" cy="33" rx="30" ry="18" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="28" y="30" width="44" height="12" rx="3" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2"/>
  <rect x="24" y="36" width="8" height="5" rx="2" fill="#FF6B2B" stroke="#0A0A0A" stroke-width="1.5"/>
  <rect x="32" y="37" width="56" height="7" rx="3.5" fill="#FFD600" stroke="#0A0A0A" stroke-width="1.5"/>
  <text x="60" y="43" text-anchor="middle" font-size="6" fill="#0A0A0A" font-weight="900">G</text>
  <rect x="36" y="51" width="18" height="11" rx="5.5" fill="#0D0D0D" stroke="#FFD600" stroke-width="2.5"/>
  <rect x="66" y="51" width="18" height="11" rx="5.5" fill="#0D0D0D" stroke="#FFD600" stroke-width="2.5"/>
  <line x1="36" y1="56" x2="54" y2="56" stroke="#FFD600" stroke-width="1.5" opacity="0.6"/>
  <line x1="66" y1="56" x2="84" y2="56" stroke="#FFD600" stroke-width="1.5" opacity="0.6"/>
  <line x1="54" y1="56" x2="66" y2="56" stroke="#FFD600" stroke-width="2"/>
  <line x1="36" y1="56" x2="32" y2="55" stroke="#FFD600" stroke-width="2"/>
  <line x1="84" y1="56" x2="88" y2="55" stroke="#FFD600" stroke-width="2"/>
  <path d="M52 66 Q60 72 68 66" fill="#6B3A18" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round"/>
  <circle cx="53" cy="66" r="3" fill="#6B3A18" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="67" cy="66" r="3" fill="#6B3A18" stroke="#0A0A0A" stroke-width="1.5"/>
  <path d="M44 74 Q60 83 76 74" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M46 74 Q60 81 74 74" fill="white"/>
  <circle cx="32" cy="58" r="4" fill="#FFD600" stroke="#0A0A0A" stroke-width="2"/>
  <circle cx="88" cy="58" r="4" fill="#FFD600" stroke="#0A0A0A" stroke-width="2"/>
</svg>`
    },
    {
        id: 4, name: 'Mariam',
        svg: `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
  <rect width="120" height="140" fill="#FF9800"/>
  <rect x="0" y="95" width="120" height="45" fill="#FFD600" opacity="0.5"/>
  <circle cx="96" cy="22" r="18" fill="#FFE082" opacity="0.7"/>
  <path d="M20 95 Q60 80 100 95 L100 140 L20 140Z" fill="#E91E63" stroke="#0A0A0A" stroke-width="3"/>
  <path d="M33 95 Q60 87 87 95" stroke="#FF4E8B" stroke-width="4" fill="none" stroke-linecap="round"/>
  <circle cx="42" cy="112" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="1.5" opacity="0.8"/>
  <circle cx="60" cy="118" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="1.5" opacity="0.8"/>
  <circle cx="78" cy="112" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="1.5" opacity="0.8"/>
  <path d="M20 100 Q4 108 6 128 Q8 136 20 133 Q24 131 24 120Z" fill="#8B5E2B" stroke="#0A0A0A" stroke-width="3"/>
  <path d="M100 100 Q116 108 114 128 Q112 136 100 133 Q96 131 96 120Z" fill="#8B5E2B" stroke="#0A0A0A" stroke-width="3"/>
  <rect x="44" y="79" width="32" height="17" rx="4" fill="#8B5E2B" stroke="#0A0A0A" stroke-width="2.5"/>
  <path d="M32 97 Q60 111 88 97" fill="none" stroke="#0A0A0A" stroke-width="5"/>
  <path d="M32 97 Q60 111 88 97" fill="none" stroke="#FFD600" stroke-width="3" stroke-dasharray="5,3"/>
  <circle cx="60" cy="110" r="8" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <text x="60" y="113.5" text-anchor="middle" font-size="7" fill="#0A0A0A" font-weight="900">★</text>
  <ellipse cx="60" cy="55" rx="27" ry="29" fill="#8B5E2B" stroke="#0A0A0A" stroke-width="3"/>
  <circle cx="60" cy="33" r="26" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2.5"/>
  <circle cx="36" cy="44" r="14" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2"/>
  <circle cx="84" cy="44" r="14" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2"/>
  <circle cx="40" cy="20" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2"/>
  <circle cx="60" cy="14" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2"/>
  <circle cx="80" cy="20" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2"/>
  <circle cx="84" cy="28" r="7" fill="#FF4E8B" stroke="#0A0A0A" stroke-width="2"/>
  <circle cx="84" cy="28" r="3.5" fill="#FFD600" stroke="#0A0A0A" stroke-width="1.5"/>
  <rect x="37" y="50" width="19" height="12" rx="6" fill="white" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="64" y="50" width="19" height="12" rx="6" fill="white" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="37" y="50" width="19" height="6" rx="4" fill="#0D0D0D"/>
  <rect x="64" y="50" width="19" height="6" rx="4" fill="#0D0D0D"/>
  <circle cx="46.5" cy="59" r="4" fill="#0D0D0D"/>
  <circle cx="73.5" cy="59" r="4" fill="#0D0D0D"/>
  <circle cx="48.5" cy="57" r="1.5" fill="white"/>
  <circle cx="75.5" cy="57" r="1.5" fill="white"/>
  <line x1="38" y1="51" x2="35" y2="46" stroke="#0D0D0D" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="44" y1="50" x2="43" y2="45" stroke="#0D0D0D" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="51" x2="50" y2="46" stroke="#0D0D0D" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="65" y1="51" x2="63" y2="46" stroke="#0D0D0D" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="71" y1="50" x2="70" y2="45" stroke="#0D0D0D" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="77" y1="51" x2="78" y2="46" stroke="#0D0D0D" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M51 67 Q60 73 69 67" fill="#6A3E10" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round"/>
  <circle cx="52" cy="67" r="3.5" fill="#6A3E10" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="68" cy="67" r="3.5" fill="#6A3E10" stroke="#0A0A0A" stroke-width="1.5"/>
  <path d="M42 75 Q60 87 78 75" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2.5"/>
  <path d="M44 75 Q60 84 76 75" fill="#E91E63"/>
  <path d="M44 75 Q60 78 76 75" fill="#FF80AB"/>
  <circle cx="31" cy="60" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <circle cx="89" cy="60" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
</svg>`
    },
    {
        id: 5, name: 'Serge',
        svg: `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="legBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFD600"/>
      <stop offset="100%" style="stop-color:#FF6B2B"/>
    </linearGradient>
  </defs>
  <rect width="120" height="140" fill="url(#legBg)"/>
  <circle cx="60" cy="70" r="55" fill="none" stroke="white" stroke-width="1.5" opacity="0.3"/>
  <circle cx="60" cy="70" r="45" fill="none" stroke="white" stroke-width="1" opacity="0.2"/>
  <path d="M18 90 Q40 74 60 80 Q80 74 102 90 L102 140 L18 140Z" fill="#1A1A2E" stroke="#0A0A0A" stroke-width="3"/>
  <path d="M18 90 Q40 74 60 80 Q80 74 102 90" stroke="#FFD600" stroke-width="3" fill="none"/>
  <rect x="42" y="100" width="36" height="14" rx="4" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <text x="60" y="111" text-anchor="middle" font-size="7" fill="#1A1A2E" font-weight="900" font-family="Arial Black">GRAMO</text>
  <path d="M18 96 Q2 105 4 128 Q6 137 18 134 Q22 132 22 122Z" fill="#7A4010" stroke="#0A0A0A" stroke-width="3"/>
  <path d="M102 96 Q118 105 116 128 Q114 137 102 134 Q98 132 98 122Z" fill="#7A4010" stroke="#0A0A0A" stroke-width="3"/>
  <circle cx="10" cy="122" r="10" fill="#FFD600" opacity="0.25"/>
  <circle cx="110" cy="122" r="10" fill="#FFD600" opacity="0.25"/>
  <rect x="44" y="78" width="32" height="14" rx="4" fill="#7A4010" stroke="#0A0A0A" stroke-width="2.5"/>
  <path d="M28 93 Q60 108 92 93" fill="none" stroke="#0A0A0A" stroke-width="5"/>
  <path d="M28 93 Q60 108 92 93" fill="none" stroke="#FFD600" stroke-width="3" stroke-dasharray="5,3"/>
  <circle cx="60" cy="107" r="9" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <polygon points="60,100 62.5,106 69,106 64,110 66,116 60,112 54,116 56,110 51,106 57.5,106" fill="#FF6B2B" stroke="#0A0A0A" stroke-width="1"/>
  <ellipse cx="60" cy="52" rx="27" ry="29" fill="#7A4010" stroke="#0A0A0A" stroke-width="3"/>
  <circle cx="60" cy="30" r="27" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2.5"/>
  <circle cx="34" cy="42" r="15" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2"/>
  <circle cx="86" cy="42" r="15" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2"/>
  <circle cx="28" cy="22" r="6" fill="#FFD600" opacity="0.9" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="60" cy="12" r="6" fill="#FFD600" opacity="0.9" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="92" cy="22" r="6" fill="#FFD600" opacity="0.9" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="40" cy="15" r="5" fill="#FFD600" opacity="0.7" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="80" cy="15" r="5" fill="#FFD600" opacity="0.7" stroke="#0A0A0A" stroke-width="1.5"/>
  <path d="M34 28 L37 18 L44 26 L60 14 L76 26 L83 18 L86 28Z" fill="#FFD600" stroke="#0A0A0A" stroke-width="2"/>
  <circle cx="60" cy="16" r="4" fill="white" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="38" cy="21" r="3" fill="white" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="82" cy="21" r="3" fill="white" stroke="#0A0A0A" stroke-width="1.5"/>
  <rect x="37" y="49" width="19" height="12" rx="6" fill="white" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="64" y="49" width="19" height="12" rx="6" fill="white" stroke="#0A0A0A" stroke-width="2.5"/>
  <circle cx="46.5" cy="55" r="5" fill="#FF6B2B"/>
  <circle cx="73.5" cy="55" r="5" fill="#FF6B2B"/>
  <circle cx="46.5" cy="55" r="3" fill="#0D0D0D"/>
  <circle cx="73.5" cy="55" r="3" fill="#0D0D0D"/>
  <circle cx="48" cy="53.5" r="1.2" fill="white"/>
  <circle cx="75" cy="53.5" r="1.2" fill="white"/>
  <path d="M52 66 Q60 72 68 66" fill="#5A2E08" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round"/>
  <circle cx="53" cy="66" r="3.5" fill="#5A2E08" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="67" cy="66" r="3.5" fill="#5A2E08" stroke="#0A0A0A" stroke-width="1.5"/>
  <path d="M40 74 Q60 87 80 74" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M42 74 Q60 84 78 74" fill="white"/>
  <circle cx="32" cy="56" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <circle cx="88" cy="56" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <text x="14" y="50" font-size="14" opacity="0.9" fill="#FFD600">✦</text>
  <text x="96" y="50" font-size="14" opacity="0.9" fill="#FFD600">✦</text>
</svg>`
    },
    {
        id: 6, name: 'Fatim',
        svg: `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
  <rect width="120" height="140" fill="#00E5FF"/>
  <path d="M60 6 L104 22 L118 62 L98 100 L60 110 L22 100 L2 62 L16 22Z" fill="#00B8CC" opacity="0.45"/>
  <path d="M22 96 Q60 82 98 96 L98 140 L22 140Z" fill="#8B5CF6" stroke="#0A0A0A" stroke-width="3"/>
  <path d="M38 96 L60 104 L82 96" fill="none" stroke="#0A0A0A" stroke-width="2.5"/>
  <path d="M22 100 Q5 108 7 128 Q9 136 20 133 Q24 131 24 122Z" fill="#8B5A2B" stroke="#0A0A0A" stroke-width="3"/>
  <path d="M98 100 Q115 108 113 128 Q111 136 100 133 Q96 131 96 122Z" fill="#8B5A2B" stroke="#0A0A0A" stroke-width="3"/>
  <rect x="44" y="80" width="32" height="16" rx="4" fill="#8B5A2B" stroke="#0A0A0A" stroke-width="2.5"/>
  <path d="M30 94 Q60 108 90 94" fill="none" stroke="#0A0A0A" stroke-width="5"/>
  <path d="M30 94 Q60 108 90 94" fill="none" stroke="#FFD600" stroke-width="3" stroke-dasharray="5,3"/>
  <circle cx="60" cy="107" r="8" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <text x="60" y="110.5" text-anchor="middle" font-size="7" fill="#0A0A0A" font-weight="900">G</text>
  <ellipse cx="60" cy="54" rx="27" ry="29" fill="#8B5A2B" stroke="#0A0A0A" stroke-width="3"/>
  <path d="M30 42 Q30 16 60 14 Q90 16 90 42 L90 46 L30 46Z" fill="#FF4E8B" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="22" y="40" width="76" height="10" rx="5" fill="#FF80AB" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="34" y="52" width="20" height="13" rx="6.5" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2.5"/>
  <rect x="66" y="52" width="20" height="13" rx="6.5" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2.5"/>
  <line x1="54" y1="58" x2="66" y2="58" stroke="#0A0A0A" stroke-width="2.5"/>
  <line x1="34" y1="58" x2="28" y2="56" stroke="#0A0A0A" stroke-width="2.5"/>
  <line x1="86" y1="58" x2="92" y2="56" stroke="#0A0A0A" stroke-width="2.5"/>
  <circle cx="44" cy="58.5" r="2.2" fill="white" opacity="0.8"/>
  <circle cx="76" cy="58.5" r="2.2" fill="white" opacity="0.8"/>
  <path d="M52 69 Q60 75 68 69" fill="#6B3A18" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round"/>
  <circle cx="53" cy="69" r="3" fill="#6B3A18" stroke="#0A0A0A" stroke-width="1.5"/>
  <circle cx="67" cy="69" r="3" fill="#6B3A18" stroke="#0A0A0A" stroke-width="1.5"/>
  <path d="M44 78 Q60 90 76 78" fill="#0D0D0D" stroke="#0A0A0A" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M46 78 Q60 87 74 78" fill="white"/>
  <circle cx="31" cy="60" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
  <circle cx="89" cy="60" r="5" fill="#FFD600" stroke="#0A0A0A" stroke-width="2.5"/>
</svg>`
    },
];

// ══════════════════════════════
// RENDU DES AVATARS (onboarding + galerie)
// ══════════════════════════════
function renderAvatarPicker(selectedId) {
    const picker = document.getElementById('avatarPicker');
    if (!picker) return;
    picker.innerHTML = avatarsData.map(function(av) {
        return '<div class="avatar-choice' + (av.id === selectedId ? ' selected' : '') + '" data-name="' + av.name + '" data-avatar-id="' + av.id + '">' +
            '<div class="avatar-face">' + av.svg + '</div>' +
            '<p>' + av.name + '</p>' +
        '</div>';
    }).join('');
}

function renderAvatarShowcase() {
    const showcase = document.getElementById('avatarsShowcase');
    if (!showcase) return;
    showcase.innerHTML = avatarsData.map(function(av) {
        return '<div class="avatar-option" data-avatar-id="' + av.id + '">' +
            '<div class="avatar-face">' + av.svg + '</div>' +
            '<p>' + av.name + '</p>' +
        '</div>';
    }).join('');
}

function getAvatarById(id) {
    return avatarsData.find(function(av) { return av.id === id; }) || avatarsData[0];
}


// ══════════════════════════════
// GESTES UNIQUES AU CLIC SUR UN AVATAR
// ══════════════════════════════

const avatarGestures = {
    0: 'gesture-bounce-kid',    // Koffi
    1: 'gesture-sway-queen',    // Aya
    2: 'gesture-stir-chef',     // Yacou
    3: 'gesture-nod-rider',     // Didier
    4: 'gesture-glow-goddess',  // Mariam
    5: 'gesture-flex-legend',   // Serge
    6: 'gesture-wink-fatim'     // Fatim
};

function playAvatarGesture(el, avatarId) {
    if (!el) return;
    const cls = avatarGestures[avatarId];
    if (!cls) return;
    el.classList.remove(cls);
    void el.offsetWidth; // permet de rejouer l'anim si on reclique vite
    el.classList.add(cls);
    el.addEventListener('animationend', function handler() {
        el.classList.remove(cls);
        el.removeEventListener('animationend', handler);
    });
}

// ══════════════════════════════
// ONBOARDING : sélection avatar + création de compte
// ══════════════════════════════
const usernameInput = document.getElementById('usernameInput');
const createAccountBtn = document.getElementById('createAccountBtn');
const onboarding = document.getElementById('onboarding');

let selectedAvatarId = null;
let selectedAvatarName = null;

renderAvatarPicker(null);
renderAvatarShowcase();

document.getElementById('avatarPicker').addEventListener('click', function(e) {
    const choice = e.target.closest('.avatar-choice');
    if (!choice) return;
    selectedAvatarId = parseInt(choice.getAttribute('data-avatar-id'));
    selectedAvatarName = choice.getAttribute('data-name');
    renderAvatarPicker(selectedAvatarId);
    const newFace = document.querySelector('#avatarPicker .avatar-choice.selected .avatar-face');
    playAvatarGesture(newFace, selectedAvatarId);
});

document.getElementById('avatarsShowcase').addEventListener('click', function(e) {
    const option = e.target.closest('.avatar-option');
    if (!option) return;
    playAvatarGesture(option.querySelector('.avatar-face'), parseInt(option.getAttribute('data-avatar-id')));
});

createAccountBtn.addEventListener('click', function() {
    const username = usernameInput.value.trim();

    if (selectedAvatarId === null) {
        alert('Choisis un avatar avant de continuer !');
        return;
    }
    if (username === '') {
        alert('Entre un pseudo avant de continuer !');
        return;
    }

    localStorage.setItem('gramoUsername', username);
    localStorage.setItem('gramoAvatar', selectedAvatarName);
    localStorage.setItem('gramoAvatarId', selectedAvatarId);

    applyUserProfile(username, selectedAvatarId);
    onboarding.classList.add('hide');
});

// Applique le pseudo + l'avatar choisi partout sur le site (hero + profil)
function applyUserProfile(username, avatarId) {
    const av = getAvatarById(avatarId);

    const heroAvatar = document.getElementById('heroAvatar');
    const heroAvatarName = document.getElementById('heroAvatarName');
    if (heroAvatar) {
        heroAvatar.innerHTML = av.svg;
        heroAvatar.setAttribute('data-avatar-id', av.id);
    }
    if (heroAvatarName) heroAvatarName.textContent = av.name + ' — Niveau Or';

    const profilAvatar = document.getElementById('profilAvatar');
    const profilName = document.getElementById('profilName');
    if (profilAvatar) {
        profilAvatar.innerHTML = av.svg;
        profilAvatar.setAttribute('data-avatar-id', av.id);
    }
    if (profilName) profilName.textContent = av.name;
}

document.getElementById('heroAvatar').addEventListener('click', function() {
    const id = parseInt(this.getAttribute('data-avatar-id'));
    if (!isNaN(id)) playAvatarGesture(this, id);
});
document.getElementById('profilAvatar').addEventListener('click', function() {
    const id = parseInt(this.getAttribute('data-avatar-id'));
    if (!isNaN(id)) playAvatarGesture(this, id);
});

// Visiteur qui revient : on saute l'inscription et on réapplique son profil
(function checkReturningUser() {
    const savedName = localStorage.getItem('gramoUsername');
    const savedAvatarId = localStorage.getItem('gramoAvatarId');

    if (savedName && savedAvatarId !== null && savedAvatarId !== undefined) {
        applyUserProfile(savedName, parseInt(savedAvatarId));
        onboarding.classList.add('hide');
    } else {
        // Nouveau visiteur : avatar par défaut affiché en attendant son choix
        applyUserProfile('Koffi', 0);
    }
})();

// Animation des compteurs du hero
const statNumbers = document.querySelectorAll('.stat-number');

statNumbers.forEach(function(stat) {
    const target = parseInt(stat.getAttribute('data-target'));
    let current = 0;
    const increment = target / 100;

    const timer = setInterval(function() {
        current += increment;
        if (current >= target) {
            stat.textContent = target;
            clearInterval(timer);
        } else {
            stat.textContent = Math.floor(current);
        }
    }, 15);
});

// Animation de la barre XP
const xpFill = document.querySelector('.xp-fill');
const xpTarget = 35;
let xpCurrent = 0;

const xpTimer = setInterval(function() {
    xpCurrent += 1;
    xpFill.style.width = xpCurrent + '%';
    if (xpCurrent >= xpTarget) {
        clearInterval(xpTimer);
    }
}, 20);

// Toast au clic sur "Rejoindre"
const joinBtn = document.getElementById('joinBtn');
const toast = document.getElementById('toast');

joinBtn.addEventListener('click', function() {
    toast.classList.add('show');

    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
});

// Panier du menu
const menuItems = document.querySelectorAll('.menu-item');
const cartCount = document.getElementById('cartCount');
const cartKermones = document.getElementById('cartKermones');

function updateCart() {
    const selectedItems = document.querySelectorAll('.menu-item.selected');
    let totalKermones = 0;

    selectedItems.forEach(function(item) {
        totalKermones += parseInt(item.getAttribute('data-kermones'));
    });

    cartCount.textContent = selectedItems.length;
    cartKermones.textContent = totalKermones;
}

menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        item.classList.toggle('selected');
        updateCart();
    });
});

// Sprites déplaçables dans le menu
const draggables = document.querySelectorAll('.draggable');

draggables.forEach(function(el) {
    el.addEventListener('pointerdown', function(e) {
        const zone = el.parentElement.getBoundingClientRect();
        const shiftX = e.clientX - el.getBoundingClientRect().left;
        const shiftY = e.clientY - el.getBoundingClientRect().top;

        el.setPointerCapture(e.pointerId);

        function onPointerMove(e) {
            el.style.left = (e.clientX - zone.left - shiftX) + 'px';
            el.style.top = (e.clientY - zone.top - shiftY) + 'px';
        }

        el.addEventListener('pointermove', onPointerMove);

        el.addEventListener('pointerup', function() {
            el.removeEventListener('pointermove', onPointerMove);
        }, { once: true });
    });
});

// ══════════════════════════════
// FIDÉLITÉ : carte tampon
// ══════════════════════════════
const stampsFilled = 7;
const stampsEl = document.getElementById('stamps');
if (stampsEl) {
    let stampsHtml = '';
    for (let i = 0; i < 10; i++) {
        stampsHtml += '<div class="stamp' + (i < stampsFilled ? ' filled' : '') + '">' + (i < stampsFilled ? '✓' : '') + '</div>';
    }
    stampsEl.innerHTML = stampsHtml;
}

// ══════════════════════════════
// PROFIL : badges
// ══════════════════════════════
const badgeIcons = ['🔥', '🌍', '⚡', '🏆', '👟', '💎', '🎯', '🚀'];
const earnedBadgeIndexes = [0, 1, 2, 3, 4];
const badgesGridEl = document.getElementById('badgesGrid');
if (badgesGridEl) {
    badgesGridEl.innerHTML = badgeIcons.map(function(icon, i) {
        const earned = earnedBadgeIndexes.indexOf(i) !== -1;
        return '<div class="badge-item' + (earned ? '' : ' locked') + '">' + icon + '</div>';
    }).join('');
}

// ══════════════════════════════
// DÉFIS : la roue qui tourne
// ══════════════════════════════
const defisList = [
    { emoji: '💃', title: 'Afro Dance', desc: 'Danse 30 secondes sur le son qu\'on choisit !', color: '#ff6b35', reward: '-200 Kermones' },
    { emoji: '🌶️', title: 'Piment Challenge', desc: 'Mange le plat le plus pimenté du menu !', color: '#e53935', reward: 'Boisson offerte' },
    { emoji: '🎤', title: 'Freestyle GRAMO', desc: 'Invente un slogan pour GRAMO en 10 secondes !', color: '#8b5cf6', reward: '-200 Kermones' },
    { emoji: '⚡', title: 'Speed Crispy', desc: 'Mange ton plat en moins de 60 secondes !', color: '#ffd166', reward: 'Repas offert' },
    { emoji: '🎭', title: 'Mime Food', desc: 'Mime un plat, tes potes devinent !', color: '#00d166', reward: '-200 Kermones' },
    { emoji: '👁️', title: 'Blind Taste', desc: 'Devine la boisson les yeux bandés !', color: '#2962ff', reward: 'Boisson offerte' },
    { emoji: '📸', title: 'Pose Legendary', desc: 'Prends la pose la plus stylée !', color: '#ff4e8b', reward: 'Photo offerte' },
    { emoji: '🎲', title: 'Menu Mystère', desc: 'Commande les yeux fermés — surprise garantie !', color: '#00e5ff', reward: '-300 Kermones' },
];

const wheelCanvas = document.getElementById('wheelCanvas');
let wheelAngle = 0;
let wheelSpinning = false;

function lightenColor(hex) {
    const num = parseInt(hex.replace('#', ''), 16);
    const r = Math.min(255, (num >> 16) + 50);
    const g = Math.min(255, ((num >> 8) & 0xff) + 50);
    const b = Math.min(255, (num & 0xff) + 50);
    return '#' + [r, g, b].map(function(x) { return x.toString(16).padStart(2, '0'); }).join('');
}

function drawWheel(ctx, rotation) {
    const cx = 140, cy = 140, r = 132;
    const slice = (2 * Math.PI) / defisList.length;
    ctx.clearRect(0, 0, 280, 280);

    defisList.forEach(function(d, i) {
        const start = rotation + i * slice;
        const end = start + slice;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, r, start, end);
        ctx.closePath();
        ctx.fillStyle = i % 2 === 0 ? d.color : lightenColor(d.color);
        ctx.fill();
        ctx.strokeStyle = '#1a1a1a';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(start + slice / 2);
        ctx.textAlign = 'right';
        ctx.font = '18px serif';
        ctx.fillText(d.emoji, r - 16, 6);
        ctx.restore();
    });

    ctx.beginPath();
    ctx.arc(cx, cy, 26, 0, 2 * Math.PI);
    ctx.fillStyle = '#1a1a1a';
    ctx.fill();
    ctx.strokeStyle = '#ffd166';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.font = 'bold 11px Poppins, Arial';
    ctx.fillStyle = '#ffd166';
    ctx.textAlign = 'center';
    ctx.fillText('GRAMO', cx, cy + 4);
}

if (wheelCanvas) {
    const wheelCtx = wheelCanvas.getContext('2d');
    drawWheel(wheelCtx, 0);

    document.getElementById('spinBtn').addEventListener('click', function() {
        if (wheelSpinning) return;
        wheelSpinning = true;

        const spinBtn = document.getElementById('spinBtn');
        spinBtn.disabled = true;
        spinBtn.style.opacity = '0.5';
        document.getElementById('defiResult').classList.remove('show');

        const extraSpins = 5 + Math.random() * 5;
        const targetAngle = wheelAngle + (extraSpins * 2 * Math.PI) + Math.random() * 2 * Math.PI;
        const duration = 3500;
        const startTime = performance.now();
        const startAngle = wheelAngle;

        function animate(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            wheelAngle = startAngle + (targetAngle - startAngle) * ease;
            drawWheel(wheelCtx, wheelAngle);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                wheelAngle = targetAngle % (2 * Math.PI);
                wheelSpinning = false;
                spinBtn.disabled = false;
                spinBtn.style.opacity = '1';
                showDefiResult();
            }
        }
        requestAnimationFrame(animate);
    });

    let currentDefi = null;

    function showDefiResult() {
        const slice = (2 * Math.PI) / defisList.length;
        const normalizedAngle = (2 * Math.PI - (wheelAngle % (2 * Math.PI))) % (2 * Math.PI);
        const idx = Math.floor(normalizedAngle / slice) % defisList.length;
        currentDefi = defisList[idx];

        document.getElementById('defiEmoji').textContent = currentDefi.emoji;
        document.getElementById('defiTitle').textContent = currentDefi.title;
        document.getElementById('defiDesc').textContent = currentDefi.desc;
        document.getElementById('defiResult').style.borderColor = currentDefi.color;
        document.getElementById('defiResult').classList.add('show');
        document.getElementById('defiResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    document.getElementById('defiReussiBtn').addEventListener('click', function() {
        toast.textContent = '🔥 Défi réussi ! ' + (currentDefi ? currentDefi.reward : '') + ' gagné !';
        toast.classList.add('show');
        setTimeout(function() {
            toast.classList.remove('show');
            toast.textContent = 'Bienvenue dans le Dream Loop GRAMO !';
        }, 3000);
        document.getElementById('defiResult').classList.remove('show');
    });

    document.getElementById('defiRateBtn').addEventListener('click', function() {
        toast.textContent = '😅 Pas de chance — retente ta chance !';
        toast.classList.add('show');
        setTimeout(function() {
            toast.classList.remove('show');
            toast.textContent = 'Bienvenue dans le Dream Loop GRAMO !';
        }, 3000);
        document.getElementById('defiResult').classList.remove('show');
    });
}

// ══════════════════════════════
// COMMANDER : carte Abidjan + food trucks GRAMO + simulation livreur
// ══════════════════════════════
const trucksData = [
    {
        id: 'cocody',
        name: 'GRAMO Truck — Cocody',
        lat: 5.3599, lng: -3.9811,
        icon: 'images/sticker-poisson.png',
        distanceKm: 1.2, eta: 8,
        dishes: [
            { name: 'Attiéké Royal', kermones: 18 },
            { name: 'Tacos Crevettes Bassam', kermones: 25 },
            { name: 'Bissap citron vert', kermones: 8 },
        ],
    },
    {
        id: 'plateau',
        name: 'GRAMO Truck — Plateau',
        lat: 5.3197, lng: -4.0205,
        icon: 'images/sticker-frites.png',
        distanceKm: 3.4, eta: 14,
        dishes: [
            { name: 'Alloco Signature', kermones: 15 },
            { name: 'GRAMO Crispy', kermones: 20 },
            { name: 'Side maison', kermones: 10 },
        ],
    },
    {
        id: 'treichville',
        name: 'GRAMO Truck — Treichville',
        lat: 5.2934, lng: -4.0128,
        icon: 'images/sticker-beignets.png',
        distanceKm: 4.1, eta: 17,
        dishes: [
            { name: 'Beignets maison', kermones: 10 },
            { name: 'Brochettes Dream Loop', kermones: 20 },
            { name: 'Bissap gingembre', kermones: 6 },
        ],
    },
    {
        id: 'yopougon',
        name: 'GRAMO Truck — Yopougon',
        lat: 5.3450, lng: -4.0858,
        icon: 'images/sticker-poisson2.png',
        distanceKm: 6.8, eta: 22,
        dishes: [
            { name: 'Poisson braisé + riz', kermones: 22 },
            { name: 'Bubble tea', kermones: 14 },
        ],
    },
];

const mapEl = document.getElementById('gramoMap');
if (mapEl && window.L) {
    const gramoMap = L.map('gramoMap', { zoomControl: true, scrollWheelZoom: false }).setView([5.345, -4.02], 11.3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap',
        maxZoom: 18,
    }).addTo(gramoMap);

    function truckIcon(iconUrl) {
        return L.divIcon({
            className: 'truck-marker',
            html: '<img src="' + iconUrl + '" style="width:46px;height:46px;display:block;">',
            iconSize: [46, 46],
            iconAnchor: [23, 40],
            popupAnchor: [0, -38],
        });
    }

    function popupHtml(truck) {
        const items = truck.dishes.map(function(d) {
            return '<li>' + d.name + ' <b>+' + d.kermones + '</b></li>';
        }).join('');
        return '<div class="truck-popup"><h4>' + truck.name + '</h4><ul>' + items + '</ul><button type="button" data-truck="' + truck.id + '">Commander ici</button></div>';
    }

    const truckMarkers = {};
    trucksData.forEach(function(truck) {
        const marker = L.marker([truck.lat, truck.lng], { icon: truckIcon(truck.icon) }).addTo(gramoMap);
        marker.bindPopup(popupHtml(truck));
        truckMarkers[truck.id] = marker;
    });

    // "Chez toi" — point fixe de démo
    const homePoint = [5.3650, -3.9900];
    const homeIcon = L.divIcon({
        className: 'home-marker',
        html: '<div style="font-size:26px;">🏠</div>',
        iconSize: [30, 30],
        iconAnchor: [15, 26],
    });
    L.marker(homePoint, { icon: homeIcon }).addTo(gramoMap).bindPopup('Chez toi');

    // Livreur simulé : navette entre le truck Cocody et "chez toi"
    const routeStart = [trucksData[0].lat, trucksData[0].lng];
    const routeEnd = homePoint;
    L.polyline([routeStart, routeEnd], { color: '#00D166', weight: 3, dashArray: '6 8', opacity: 0.7 }).addTo(gramoMap);

    const moto = L.divIcon({
        className: 'moto-marker',
        html: '<div style="font-size:24px;">🛵</div>',
        iconSize: [28, 28],
        iconAnchor: [14, 14],
    });
    const motoMarker = L.marker(routeStart, { icon: moto }).addTo(gramoMap);

    let t = 0;
    let direction = 1;
    setInterval(function() {
        t += direction * 0.02;
        if (t >= 1) { t = 1; direction = -1; }
        if (t <= 0) { t = 0; direction = 1; }
        const lat = routeStart[0] + (routeEnd[0] - routeStart[0]) * t;
        const lng = routeStart[1] + (routeEnd[1] - routeStart[1]) * t;
        motoMarker.setLatLng([lat, lng]);

        const etaEl = document.getElementById('etaMin');
        if (etaEl) {
            const remaining = direction === 1 ? Math.max(1, Math.round(8 * (1 - t))) : Math.max(1, Math.round(8 * t));
            etaEl.textContent = remaining;
        }
    }, 120);

    // Popup "Commander ici" -> toast
    gramoMap.on('popupopen', function(e) {
        const btn = e.popup.getElement().querySelector('button[data-truck]');
        if (btn) {
            btn.addEventListener('click', function() {
                const truck = trucksData.find(function(x) { return x.id === btn.getAttribute('data-truck'); });
                toast.textContent = '🛵 Commande envoyée à ' + (truck ? truck.name : 'GRAMO') + ' !';
                toast.classList.add('show');
                setTimeout(function() {
                    toast.classList.remove('show');
                    toast.textContent = 'Bienvenue dans le Dream Loop GRAMO !';
                }, 3000);
            });
        }
    });

    // Légende sous la carte, synchronisée avec les marqueurs
    const legendEl = document.getElementById('trucksLegend');
    if (legendEl) {
        legendEl.innerHTML = trucksData.map(function(truck) {
            return '<div class="truck-card" data-truck="' + truck.id + '">' +
                '<img src="' + truck.icon + '" alt="">' +
                '<div><h4>' + truck.name + '</h4><p class="truck-meta">' + truck.distanceKm + ' km · <b>' + truck.eta + ' min</b></p></div>' +
                '</div>';
        }).join('');

        legendEl.querySelectorAll('.truck-card').forEach(function(card) {
            card.addEventListener('click', function() {
                const id = card.getAttribute('data-truck');
                const marker = truckMarkers[id];
                if (marker) {
                    gramoMap.flyTo(marker.getLatLng(), 13, { duration: 0.6 });
                    marker.openPopup();
                }
                legendEl.querySelectorAll('.truck-card').forEach(function(c) { c.classList.remove('active'); });
                card.classList.add('active');
            });
        });
    }
}