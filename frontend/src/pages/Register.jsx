import { FaUser } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { registerUser, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner';


const Register = () => {

     const [userData, setUserData] = useState({
          fname: '',
          lname: '',
          email: '',
          password: '',
          password2: ''
     })
     const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
     const navigate = useNavigate();
     const dispatch = useDispatch();



     const changeHandler = (e) => {
          e.preventDefault();
          setUserData({
               ...userData,
               [e.target.name]: e.target.value
          })
     }
     useEffect(() => {
          if (isError) {
               toast.error(message)
          }
          if (isSuccess) {
               navigate('/')
          }
          dispatch(reset())
     }, [user, isError, isSuccess, message, navigate, dispatch])

     const formSubmitHandler = (e) => {
          e.preventDefault()
          const { fname, lname, email, password } = userData
          if (userData.password !== userData.password2) {
               toast.error('password should match')
          } else {
               const userData = {
                    fname,
                    lname,
                    email,
                    password,
               }
               dispatch(registerUser(userData))
          }
     }
     if (isLoading) {
          return <Spinner />
     }
     return (
          <div>
               <section className="heading">
                    <h1>
                         <FaUser /> Register
                    </h1>
                    <p>Please create an account</p>
               </section>
               <section className='form'>
                    <form onSubmit={formSubmitHandler}>
                         <div className='form-group'>
                              <input
                                   type="text"
                                   className='form-control'
                                   name='fname'
                                   value={userData.fname}
                                   placeholder="First name.."
                                   onChange={changeHandler}
                              />
                         </div>
                         <div className='form-group'>
                              <input
                                   type="text"
                                   className='form-control'
                                   name='lname'
                                   value={userData.lname}
                                   placeholder="Last name.."
                                   onChange={changeHandler}
                              />
                         </div>
                         <div className='form-group'>
                              <input
                                   type="email"
                                   className='form-control'
                                   name='email'
                                   value={userData.email}
                                   placeholder="email.."
                                   onChange={changeHandler}
                              />
                         </div>
                         <div className='form-group'>
                              <input
                                   type="password"
                                   className='form-control'
                                   name='password'
                                   value={userData.password}
                                   placeholder="Password.."
                                   onChange={changeHandler}
                              />
                         </div>
                         <div className='form-group'>

                              <input
                                   type="password"
                                   className='form-control'
                                   name="password2"
                                   value={userData.password2}
                                   placeholder="confirm password.."
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
export default Register;