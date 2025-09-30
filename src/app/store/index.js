import {configureStore} from '@reduxjs/toolkit'
import WeatherSlice from '../../feautures/wheather/wheatherSlice'
const store = configureStore(
    {
        reducer : {
            weather : WeatherSlice 
        }
    }
)
export default store ;