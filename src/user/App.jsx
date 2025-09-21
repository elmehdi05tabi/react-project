import React, { useState } from 'react'
import { Provider, useSelector } from 'react-redux'
import store from './store/store' 
import User from './User'
import UserForm from './UserForm'
import './App.css' ; 
import { userSelectors } from './store/userSelectors'
export default function App() {
  return (
    <div className="container">
    <Provider store={store}>
        <User/>
        <UserForm/>
    </Provider>
    </div>
  )
}
