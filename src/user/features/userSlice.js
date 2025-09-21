import { createSlice } from "@reduxjs/toolkit";
// ! initial state
const users = {
    name : 'el mehdi tabi',
    country : 'ma',
    age : 20
}
const userSlice = createSlice(
    {
        name : 'user' ,
        initialState : users,
        reducers : {
            // Pour Subrimer user 
            resetUser : (state)=>{
                state.name = undefined
                state.country = undefined
                state.age = undefined
            },
            updateUser : (state,actions)=>{
                // * pour modifier user
                state.name = actions.payload.nameValue
                state.country = actions.payload.countryValue
                state.age = actions.payload.ageValue
            }
        }
    }
)
export const {resetUser,updateUser} = userSlice.actions ; 
export default userSlice.reducer ; 