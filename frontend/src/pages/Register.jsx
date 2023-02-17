import { FaUser } from 'react-icons/fa'
import { useState } from 'react';
const Register = () => {
     const [userData, setUserData] = useState({
          fname: '',
          lname: '',
          email: '',
          password: '',
          password2: ''
     })
     const changeHandler = (e) => {
          e.preventDefault();
          setUserData({
               ...userData,
               [e.target.name]: e.target.value
          })
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
                    <form>
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