import React from 'react'
import {motion} from 'framer-motion'
export default function Clouds({width='250px',height='250px'}) {
  return (
    <div>
        <motion.svg 
        animate ={{
            y:[0,-10,-0]
        }}
        transition={{
            duration : 5,
            repeat : Infinity
        }}
        xmlns="http://www.w3.org/2000/svg" 
     width={width} height={height} viewBox="0 0 24 24" 
     fill="none" stroke="#9ca3af" stroke-width="2" 
     stroke-linecap="round" stroke-linejoin="round">
  <motion.path 
  transition={{
    duration : 5,
  }}
  initial={{
    pathLength : 0

  }}
  stroke={'#fff'}
  animate={{
    pathLength : 1,
  }}
  d="M7 17a3 3 0 0 1 0-6 4 4 0 0 1 7-1.5 3.5 3.5 0 0 1 3.5 5.5H7z" fill="#e5e7eb"
  />
  <motion.path
   transition={{
    duration : 5,
  }}
  initial={{
    pathLength : 0
  }}
  stroke={'#fff'}
  animate={{
    pathLength : 1
  }}
  d="M4 14a4 4 0 0 1 0-8 5 5 0 0 1 9.5-2 4.5 4.5 0 0 1 4.5 6H4z" fill="#d1d5db"/>
</motion.svg>

    </div>
  )
}
