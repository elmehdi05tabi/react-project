import React from 'react'

export default function Thermometre({width='25px',height='25px'}) {
  return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg"
     width={width} height={height} viewBox="0 0 64 64" role="img" aria-label="Thermometer">
  <rect x="26" y="8" width="12" height="36" rx="6" ry="6"
        fill="#E6ECF3" stroke="#555" stroke-width="2"/>
  <rect x="28" y="22" width="8" height="20" rx="4" ry="4" fill="#FF4C4C"/>
  
  <circle cx="32" cy="52" r="12" fill="#FF4C4C" stroke="#555" stroke-width="2"/>
  
  <circle cx="28" cy="48" r="3" fill="white" opacity="0.6"/>
</svg>

    </>
  )
}
