import React from 'react'
import wallpaper from '../../asset/img/wallpaper.jpg'
import './wallpaper.scss'
export default function Wallpaper() {
  return (
    <>
    <div className="wallpaper-container position-fixed top-0 bottom-0 end-0 start-2">
        <img className='wallpaper'src={wallpaper} alt="wallpaper" />
    </div>
    </>
  )
}
