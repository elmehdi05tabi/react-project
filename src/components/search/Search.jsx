import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap' 
import style from './search.module.scss'
import { Autocomplete, TextField } from '@mui/material'
import { useDispatch } from 'react-redux';
import { resetData, setData } from '../../feautures/wheather/wheatherSlice';



 export default function Search() {
   const GEO_API_KEY = '5fa3b69d2d6541fe9c1c90af2a0f9d72' ;
   const APP_WEATHER_API='cbb7da2463b169417c4bd6896d2373d9'
  const [cities,setCities] = useState([]) ; 
  const dispatch = useDispatch()  ;
  const [unity,setUnity] = useState('metric')
   const handelInputChange = (e)=>{
     const {value} = e.currentTarget ;
    fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=${GEO_API_KEY}`)
    .then(response=>response.json()) 
    .then(json=>{
      if(value!=''){
        setCities(json.results.map(data=>{
          const {lat,lon,country,city,formatted} = data ; 
          return {lat,lon,country,city,formatted}
    }))}}) ;
  }
  const handelChangeData = (e,value)=>{
    if(value !== null) {

      const {lat,lon} = value ; 
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=${unity}&lon=${lon}&appid=${APP_WEATHER_API}`)
      .then(response=>response.json())
      .then(json=>{
        const {clouds,main,name,sys,weather,wind} = json 
        dispatch(setData( {clouds,main,name,sys,weather,wind})) ; 
      }) ; 
    }else{
      dispatch(resetData  ())
    }
  }
  return (
    <>
    <Form>
        <Form.Group className={`${style.searchContainer}`}>
          <Autocomplete  
          clearOnBlur={false}
          getOptionLabel={(option)=>option.formatted}
          onChange={handelChangeData}
          renderInput={(params)=> <TextField 
            onChange={handelInputChange}
            {...params} label='entre your city' />} 
          className={`${style.searchInput}`}
          options={cities}
          />
            <Button  size={'sm'}variant={'primary'}>Searche</Button>
        </Form.Group>
    </Form>
    </>
  )
}
