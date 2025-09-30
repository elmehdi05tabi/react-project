import React from 'react'
import styles from './weather.module.scss'
import { Card } from 'react-bootstrap'
import PositionSvg from '../components/svgs/PositionSvg'
import DefaultWeather from '../components/svgs/DefaultWeather'
import Thermometre from '../components/svgs/Thermometre'
import Time from '../components/svgs/Time'
import Sunrise from '../components/svgs/Sunrise'
import Wind from '../components/svgs/Wind'
import Temp from '../components/svgs/Temp'
import { useSelector } from 'react-redux'
import Humidity from '../components/svgs/Humidity'
import Speed from '../components/svgs/Speed' ; 
import Moment from 'react-moment'
import ClearSky from '../components/svgs/ClearSky'
import Clouds from '../components/svgs/Clouds'
import Thunder from '../components/svgs/Thunder'
import Rain from '../components/svgs/Rain'

export default function Weather() {
  const weather = useSelector(({weather} )=>{
    return weather ;
  }) ; 
  console.log(weather) ; 
  const displayIcon = ()=>{
    // if(weather.length >0) {
      const number = weather.weather.icon.substring(0,2)
      switch (number) {
        case '01' :
          return <ClearSky width={'250px'} heigth={'250px'}/>
        case '03': 
        case '04':
          return <Clouds width={'250px'} heigth={'250px'}/>
        case '10' : 
          return  <Rain width={'250px'} heigth={'250px'}/>
        case '11' : 
          return <Thunder width={'250px'} heigth={'250px'}/>
        default : 
          return <img src={`https://openweathermap.org/img/wn/${number}d@2x.png`}/>
      // }
    }
  }
  return (
    <>
    <Card className={`${styles.container}`} as={'div'}>
    {weather.isLodad ?
        <Card.Body as={'div'}>
            <Card.Title className='text-center'>
                {weather.name} , {weather.sys.country}  {<PositionSvg /> }
                  <div className={`${styles.date}`}>
                  <div>
                    <Moment 
                    format='llll'
                    unix={weather.sys.sunrise}>
                      {weather.sys.sunrise}
                    </Moment>
                  </div>
                  <div><Time width='15px' height='15px'/></div>
                  </div>
            </Card.Title>
            <Card.Text className={`${styles.container_infos}`}  as={'div'}>
                <div>
                  {displayIcon()} 
                </div>
                <div className={styles.tempurature}>
                  <div>{weather.main.feels_like}°C</div>
                  <div><Thermometre/></div>
                  </div>
                  <div>Good Morning {weather.name}</div>
                  <div className={`${styles.separator}`}></div>
                  <div className={styles.info}> 
                    <div className={`${styles.border_right}`}>
                      <div><Sunrise width='35px' height='35px'/></div>
                      <div>Sunrise</div>
                      <div>
                       <Moment
                       format='HH:MM'
                       unix={weather.sys.sunrise}>
                        {weather.sys.sunrise}
                       </Moment>
                      </div>
                    </div>
                    <div className={`${styles.border_right}`}>
                      <div><Wind width='35px' height='35px'/></div>
                      <div>Wind</div>
                      <div>{weather.wind.speed}m/s</div>
                    </div>
                    <div className={`${styles.border_right}`}>
                      <div><Humidity width='25px' height='25px'/></div>
                      <div>Humidity</div>
                      <div>{weather.main.humidity}%</div>
                    </div>
                    <div className={`${styles.border_right}`}>
                      <div><Speed width='25px' height='25px'/></div>
                      <div>Speedometre</div>
                      <div>{weather.main.pressure }Pa</div>
                    </div>
                    <div>
                      <div><Temp width='35px' height='35px'/></div>
                      <div>Temp</div>
                      <div>{weather.main.temp_max}°C</div>
                    </div>
                  </div>
            </Card.Text>
        </Card.Body>
        : <Card.Body>
          <Card.Title>Please Chosee Your City</Card.Title>
        </Card.Body>
      }
    </Card>
    </>
  )
}
