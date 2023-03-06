import { FaSignInAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { logIn, reset } from '../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'


const LogIn = () => {
     const [userInfo, setUserInfo] = useState({
          email: '',
          password: '',
     })
     const { email, password } = userInfo;
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

     useEffect(() => {
          if (isError) {
               toast.error(message)
          }
          if (isSuccess || user) {
               navigate('/')
          }
          dispatch(reset())
     }, [user, isError, isSuccess, message, navigate, dispatch])
     const changeHandler = (e) => {
          e.preventDefault();

          setUserInfo({
               ...userInfo,
               [e.target.name]: e.target.value
          })
     }

     const onSubmit = (e) => {
          e.preventDefault()
          const userData = {
               email,
               password
          }
          dispatch(logIn(userData))
     }
     if (isLoading) {
          return <Spinner />
     }
     return (
          <div>
               <section className="heading">
                    <h1>
                         <FaSignInAlt /> LogIn
                    </h1>
                    <p>Login and start setting goals!</p>
               </section>
               <section className='form'>
                    <form onSubmit={onSubmit}>
                         <div className='form-group'>
                              <input
                                   type="email"
                                   className='form-control'
                                   name='email'
                                   value={userInfo.email}
                                   placeholder="email.."
                                   onChange={changeHandler}
                              />
                         </div>
                         <div className='form-group'>
                              <input
                                   type="password"
                                   className='form-control'
                                   name='password'
                                   value={userInfo.password}
                                   placeholder="Password.."
                                   onChange={changeHandler}
                              />
                         </div>
                         <div className='form-group'>
                              <button type="submit" className='btn btn-block'>
                                   Submit
                              </button>
                         </div>
                    </form>
               </section>
          </div>
     )
}
export default LogIn;