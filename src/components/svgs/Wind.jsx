import React from 'react'

export default function Wind({width='25px',height='25px'}) {
  return (
    <>
<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" role="img" aria-label="Wind icon">
  <rect width={width} height={height} rx="8" fill="none"/>
  <path d="M10 22c6-4 16-4 20 0s-2 14-12 12" fill="none" stroke="#5DA6FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 34c5-3 14-3 18 0s-1 8-9 7" fill="none" stroke="#6FD0FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <path d="M12 46h18" fill="none" stroke="#9EE1FF" stroke-width="2.2" stroke-linecap="round"/>
  <g stroke="#5DA6FF" stroke-width="1.6" stroke-linecap="round">
    <path d="M40 18h10"/>
    <path d="M38 26h6"/>
  </g>
</svg>

    </>
  )
}
