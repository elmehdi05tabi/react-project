import React from 'react'

export default function Thunder({width,height}) {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" 
     width={width} height={height} viewBox="0 0 24 24" 
     fill="none" stroke="#facc15" stroke-width="2" 
     stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 16a4 4 0 0 1 0-8 5 5 0 0 1 9.5-2 4.5 4.5 0 0 1 4.5 6H5z" fill="#9ca3af"/>
  <polyline points="13 11 9 19 13 19 11 23" fill="#facc15"/>
  <line x1="7" y1="20" x2="7" y2="22" stroke="#3b82f6"/>
  <line x1="17" y1="20" x2="17" y2="22" stroke="#3b82f6"/>
</svg>

    </>
  )
}
