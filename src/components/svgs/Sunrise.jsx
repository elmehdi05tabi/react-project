import React from 'react'

export default function Sunrise({width='25px',height='25px'}) {
  return (
    <>
<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" role="img" aria-label="Sunrise icon">
  <rect width={width}height={height} rx="8" fill="none"/>
  <g>
    <circle cx="32" cy="28" r="8" fill="#FFD44D"/>
    <g stroke="#FFD44D" stroke-width="2" stroke-linecap="round">
      <line x1="32" y1="8"  x2="32" y2="16"/>
      <line x1="32" y1="40" x2="32" y2="48"/>
      <line x1="12" y1="28" x2="20" y2="28"/>
      <line x1="44" y1="28" x2="52" y2="28"/>
      <line x1="16" y1="14" x2="22" y2="20"/>
      <line x1="42" y1="14" x2="36" y2="20"/>
      <line x1="16" y1="42" x2="22" y2="36"/>
      <line x1="42" y1="42" x2="36" y2="36"/>
    </g>
  </g>


  <path d="M8 36c6 0 8-6 24-6s18 6 24 6" fill="none" stroke="#8FB4FF" stroke-width="2" stroke-linecap="round"/>

  <path d="M18 44c6-3 24-3 28 0" fill="none" stroke="#BFD9FF" stroke-width="1.5" stroke-linecap="round"/>
</svg>

    </>
  )
}
