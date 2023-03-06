import axios from 'axios';
const API_URL = '/api/users/'

// Register User
const register = async (user) => {
     const response = await axios.post(API_URL,user)
     if (response.data) {
          localStorage.setItem('user', JSON.stringify(response.data));
     }

     return response.data;
}
// LogIn user
const login = async (user) => {
     const response = await axios.post(API_URL + 'login', user)
     if (response.data) {
          localStorage.setItem('user', JSON.stringify(response.data));
     }
     return response.data;
}
// Logout user
const logout = async () => {
     await localStorage.removeItem('user')
}
const authService = {
     register,
     logout,
     login
};
export default authService
