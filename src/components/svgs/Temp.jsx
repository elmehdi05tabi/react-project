import React from 'react'

export default function Temp({width='25px',height='25px'}) {
  return (
    <>

<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" role="img" aria-label="Thermometer icon">
  <rect x="28" y="8" width={width} height={height} rx="4" fill="#E6ECF3" stroke="#8A8A8A" stroke-width="1.6"/>

  <rect x="30.5" y="18" width="3" height="18" rx="1.5" fill="#FF6B6B"/>
  <circle cx="32" cy="50" r="12" fill="#FF6B6B" stroke="#8A8A8A" stroke-width="1.6"/>

  <ellipse cx="28.5" cy="46.5" rx="3" ry="5" fill="white" opacity="0.5"/>

  <g stroke="#8A8A8A" stroke-width="1.2" stroke-linecap="round">
    <line x1="36.5" y1="26" x2="40" y2="26"/>
    <line x1="36.5" y1="32" x2="40" y2="32"/>
    <line x1="36.5" y1="38" x2="40" y2="38"/>
  </g>

  <text x="44" y="18" font-family="Arial, Helvetica, sans-serif" font-size="10" fill="#555">°C</text>
</svg>

    </>
  )
}
