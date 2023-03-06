import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
     user:user?user:null,
     isError:false,
     isSuccess:false,
     isLoading:false,
     message:''
}
// Register user
export const registerUser = createAsyncThunk('auth/register', async (user, thunkAPI) => {
     try {
          return await authService.register(user) 
     } catch (error) {
          const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
          return thunkAPI.rejectWithValue(message)
     }
})
// Login user
export const logIn = createAsyncThunk('auth/login', async (user, thunkAPI) => {
     try {
          return await authService.login(user) 
     } catch (error) {
          const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
          return thunkAPI.rejectWithValue(message)
     }
})
// logout user 
export const logout = createAsyncThunk('auth/logout', async () => {
     return await authService.logout();
})

export const authSlice =  createSlice({
     name:'auth',
     initialState,
     reducers: {
          reset: (state) => {
               state.isError = false;
               state.isSuccess = false;
               state.isLoading = false;
               state.message = '';      
          }
     },
     extractReducers: (builder) => {
          builder
          .addCase(registerUser.pending, (state) => {
               state.isLoading = true
          })
               .addCase(registerUser.fulfilled, (state, action) => {
               state.isLoading = false
               state.isSuccess = true
               state.user = action.payload
          })
               .addCase(registerUser.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                    state.user = null
               })
               .addCase(logIn.pending, (state) => {
               state.isLoading = true
          })
               .addCase(logIn.fulfilled, (state, action) => {
               state.isLoading = false
               state.isSuccess = true
               state.user = action.payload
          })
               .addCase(logIn.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                    state.user = null
               })
               .addCase(logout.fulfilled, (state) => {
               state.user = null
          })
     }
})
export const { reset } = authSlice.actions
export default authSlice.reducer

