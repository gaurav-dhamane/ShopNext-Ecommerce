import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user : null
}
  
  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setCredentials: (state, action) => {
        const { accessToken } = action.payload
        state.token = accessToken
    },
      setUserDetails : (state,action)=>{
        state.user = action.payload
      }
    },
  })
   
  // Action creators are generated for each case reducer function
  export const { setUserDetails ,setCredentials} = userSlice.actions
  
  export default userSlice.reducer
