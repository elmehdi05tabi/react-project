import React from 'react'

export default function Speed({width,height}) {
  return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="#ff4500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M12 12l4-4"/>
  <path d="M12 6v2"/>
  <path d="M6 12h2"/>
  <path d="M12 18v-2"/>
  <path d="M18 12h-2"/>
</svg>

    </>
  )
}
