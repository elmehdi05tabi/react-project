import React, { createContext, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from './store/userSelectors';
import { resetUser,updateUser } from './features/userSlice';
export default function UserForm() {
  const [showForm,setShowForm] = useState(false) ; 
  //! afficher la formulaire ou masqué
  const handelShow = ()=>{
    setShowForm(prevState=>!prevState); 
  }
  //* get users 
  const user = useSelector(userSelectors) ; 
  const  dispatch = useDispatch() ; 
  let name = useRef() ;
  let country = useRef() ; 
  let age = useRef() ;
  // & modifier les valeure 
  const handelSubmit =(e)=>{
    e.preventDefault() ; 
    let nameValue = name.current.value ;  
    let countryValue = country.current.value ;  
    let ageValue = age.current.value ; 
    dispatch(updateUser({nameValue,countryValue,ageValue}))  ; 
    setShowForm(false) ;
  }
  // suprimer users
  const handelDelete = ()=>{
    dispatch(resetUser()) ; 
    setShowForm(false) ; 
  }
  // ^ close form 
  const handelClose = ()=>{
    setShowForm(false) ;
  }
  return (
    <>
    <div className="buttons">
      <button onClick={handelShow}>Update your profile</button>
      <button onClick={handelDelete}>Delete Your Profile</button>
    </div> 
    {showForm && 
    <form onSubmit={handelSubmit}>
      <div className="form-groupe">
        <label htmlFor="name">Name :</label>
        <input type="text" name='name' id='name' ref={name}  defaultValue={user?.name}/>
      </div>
      <div className="form-groupe">
        <label htmlFor="name">Country :</label>
        <select type="text" name='name' id='name' ref={country} defaultValue={user?.country}  >
          <option >Choose Your Country</option>
          <option value="ma" >Marocoo</option>
          <option value="us" >Usa</option>
          <option value="fr" >France</option>
        </select>
      </div>
      <div className="form-groupe">
        <label htmlFor="age">Age :</label>
        <input type="text" name='age' id='age' ref={age}  defaultValue={user?.age}/>
      </div>
      <div className="form-groupe">
        <input type="submit" value={'Update'}      className='submit' />
        <input type="reset" value={'Close'} onClick={handelClose} className='close'/>
      </div>
    </form>
  }
    </>
  )
}
