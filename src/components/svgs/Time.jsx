import React from 'react'

export default function Time({width='25px',height='25px'}) {
  return (
  <>
  <svg xmlns="http://www.w3.org/2000/svg"
     width={width} height={height} viewBox="0 0 64 64" role="img" aria-label="Clock">
  <circle cx="32" cy="32" r="28" fill="#E6ECF3" stroke="#555" stroke-width="2"/>
  <circle cx="32" cy="10" r="2" fill="#555"/>
  <circle cx="32" cy="54" r="2" fill="#555"/>
  <circle cx="10" cy="32" r="2" fill="#555"/>
  <circle cx="54" cy="32" r="2" fill="#555"/>
  <line x1="32" y1="32" x2="32" y2="18" stroke="#FF4C4C" stroke-width="3" stroke-linecap="round"/>
  <line x1="32" y1="32" x2="44" y2="32" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <circle cx="32" cy="32" r="3" fill="#555"/>
</svg>

  </>
  )
}
