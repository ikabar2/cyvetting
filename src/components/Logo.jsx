export function LogoMark({ size = 96 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#050a0f"/>
      <circle cx="200" cy="200" r="178" fill="none" stroke="#aaff00" strokeWidth="0.7" opacity="0.1"/>
      <circle cx="200" cy="200" r="148" fill="none" stroke="#00b4ff" strokeWidth="0.5" opacity="0.07"/>
      <circle cx="200" cy="200" r="108" fill="none" stroke="#00b4ff" strokeWidth="20"/>
      <polyline points="143,132 200,238 257,132" fill="none" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="200" cy="238" r="26" fill="#aaff00" opacity="0.06"/>
      <circle cx="200" cy="238" r="20" fill="none" stroke="#aaff00" strokeWidth="2.2" opacity="0.92"/>
      <circle cx="200" cy="238" r="16" fill="#050a0f"/>
      <circle cx="200" cy="238" r="11" fill="#aaff00"/>
      <circle cx="143" cy="132" r="20" fill="#aaff00" opacity="0.06"/>
      <circle cx="143" cy="132" r="16" fill="none" stroke="#aaff00" strokeWidth="2.2" opacity="0.92"/>
      <circle cx="143" cy="132" r="12" fill="#050a0f"/>
      <circle cx="143" cy="132" r="8" fill="#aaff00"/>
      <circle cx="257" cy="132" r="20" fill="#aaff00" opacity="0.06"/>
      <circle cx="257" cy="132" r="16" fill="none" stroke="#aaff00" strokeWidth="2.2" opacity="0.92"/>
      <circle cx="257" cy="132" r="12" fill="#050a0f"/>
      <circle cx="257" cy="132" r="8" fill="#aaff00"/>
      <circle cx="200" cy="92" r="12" fill="none" stroke="#00b4ff" strokeWidth="1.8" opacity="0.5"/>
      <circle cx="200" cy="92" r="8" fill="#050a0f"/>
      <circle cx="200" cy="92" r="5" fill="#00b4ff"/>
      <line x1="280" y1="268" x2="322" y2="322" stroke="#00b4ff" strokeWidth="6" strokeLinecap="round" opacity="0.65"/>
      <circle cx="322" cy="322" r="14" fill="#aaff00" opacity="0.05"/>
      <circle cx="322" cy="322" r="12" fill="none" stroke="#aaff00" strokeWidth="1.8" opacity="0.6"/>
      <circle cx="322" cy="322" r="8" fill="#050a0f"/>
      <circle cx="322" cy="322" r="5" fill="#aaff00" opacity="0.9"/>
    </svg>
  )
}

export function LogoFull({ height = 44 }) {
  return (
    <svg height={height} viewBox="0 0 480 112" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="56" r="26" fill="none" stroke="#00b4ff" strokeWidth="7"/>
      <polyline points="34,38 50,68 66,38" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="50" cy="68" r="6" fill="#aaff00" opacity="0.08"/>
      <circle cx="50" cy="68" r="5" fill="none" stroke="#aaff00" strokeWidth="1.4" opacity="0.9"/>
      <circle cx="50" cy="68" r="3.5" fill="#050a0f"/>
      <circle cx="50" cy="68" r="2.4" fill="#aaff00"/>
      <circle cx="34" cy="38" r="5.5" fill="none" stroke="#aaff00" strokeWidth="1.4" opacity="0.9"/>
      <circle cx="34" cy="38" r="3.8" fill="#050a0f"/>
      <circle cx="34" cy="38" r="2.6" fill="#aaff00"/>
      <circle cx="66" cy="38" r="5.5" fill="none" stroke="#aaff00" strokeWidth="1.4" opacity="0.9"/>
      <circle cx="66" cy="38" r="3.8" fill="#050a0f"/>
      <circle cx="66" cy="38" r="2.6" fill="#aaff00"/>
      <line x1="72" y1="76" x2="83" y2="90" stroke="#00b4ff" strokeWidth="2" strokeLinecap="round" opacity="0.65"/>
      <circle cx="83" cy="90" r="2.2" fill="#aaff00" opacity="0.85"/>
      <text fontFamily="'Share Tech Mono', monospace" fontSize="36" fill="#aaff00"
        x="96" y="56" dominantBaseline="central" letterSpacing="1">Cy</text>
      <text fontFamily="'Share Tech Mono', monospace" fontSize="36" fill="#ffffff"
        x="143" y="56" dominantBaseline="central" letterSpacing="1">Vetting</text>
    </svg>
  )
}

export function LogoNav({ height = 36 }) {
  return (
    <svg height={height} viewBox="0 0 380 88" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="44" r="21" fill="none" stroke="#00b4ff" strokeWidth="6"/>
      <polyline points="27,30 40,54 53,30" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="40" cy="54" r="5" fill="#050a0f"/>
      <circle cx="40" cy="54" r="3.5" fill="#aaff00"/>
      <circle cx="27" cy="30" r="4.5" fill="none" stroke="#aaff00" strokeWidth="1.3" opacity="0.9"/>
      <circle cx="27" cy="30" r="3" fill="#050a0f"/>
      <circle cx="27" cy="30" r="2" fill="#aaff00"/>
      <circle cx="53" cy="30" r="4.5" fill="none" stroke="#aaff00" strokeWidth="1.3" opacity="0.9"/>
      <circle cx="53" cy="30" r="3" fill="#050a0f"/>
      <circle cx="53" cy="30" r="2" fill="#aaff00"/>
      <line x1="57" y1="60" x2="66" y2="72" stroke="#00b4ff" strokeWidth="1.8" strokeLinecap="round" opacity="0.65"/>
      <circle cx="66" cy="72" r="1.8" fill="#aaff00" opacity="0.85"/>
      <text fontFamily="'Share Tech Mono', monospace" fontSize="28" fill="#aaff00"
        x="78" y="44" dominantBaseline="central" letterSpacing="1">Cy</text>
      <text fontFamily="'Share Tech Mono', monospace" fontSize="28" fill="#ffffff"
        x="116" y="44" dominantBaseline="central" letterSpacing="1">Vetting</text>
    </svg>
  )
}
