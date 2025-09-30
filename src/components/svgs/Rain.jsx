import React from 'react'

export default function Rain({width,height}) {
  return (
    <div><svg xmlns="http://www.w3.org/2000/svg" 
     width={width} height={height} viewBox="0 0 24 24" 
     fill="none" stroke="#3b82f6" stroke-width="2" 
     stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 16a4 4 0 0 1 0-8 5 5 0 0 1 9.9-1.5A4.5 4.5 0 0 1 19 16H5z" fill="#d1d5db"/>
  <line x1="8" y1="20" x2="8" y2="22"/>
  <line x1="12" y1="20" x2="12" y2="23"/>
  <line x1="16" y1="20" x2="16" y2="22"/>
</svg>
</div>
  )
}
