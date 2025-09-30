import React from 'react'
import { frame ,motion} from 'framer-motion'
export default function DefaultWeather({width="250px",height='250px',color}) {
  return (
    <>
  <svg xmlns="http://www.w3.org/2000/svg"
     width={width} height={height} viewBox="0 0 64 64" role="img" aria-label="Default weather">
  <g>
    <motion.circle/>
    <motion.g 
    transition={{
        duration : 2
    }}
    initial={{
        y :5
    }}
    animate ={{
        y : 0
    }}
    stroke="#FFD44D" stroke-width="2" stroke-linecap="round">
      <path d="M22 6v-4M22 40v4M10 18h-4M40 18h4M12 8l-3-3M32 28l3 3M12 28l-3 3M32 8l3-3"/>
    </motion.g>
  </g>

  <path d="M44 30c3.3 0 6 2.7 6 6 0 .6-.1 1.1-.3 1.6C50.6 38.9 52 40 52 42c0 2.8-2.2 5-5 5H20c-4 0-6-3-6-6 0-2.5 1.6-4.6 3.8-5.3 0-.1 0-.2.1-.3 0-4 3.2-7.2 7.2-7.2 1.6 0 3.1.5 4.3 1.3 1.4-2.1 3.8-3.4 6.5-3.4 3.3 0 6 2 7 4.8 1.1-.3 2.3-.5 3.6-.5z"
        fill="#E6ECF3"/>

  <g fill="#5DA6FF">
    <path d="M30 48c0 1.7-.9 3-2 3s-2-1.3-2-3 2-5 2-5 2 3.3 2 5z"/>
    <path d="M38 50c0 1.7-.9 3-2 3s-2-1.3-2-3 2-5 2-5 2 3.3 2 5z"/>
  </g>
</svg>


    </>
  )
}
