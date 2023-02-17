import { FaSignInAlt } from 'react-icons/fa'
import { useState } from 'react';
const LogIn = () => {
     const [userData, setUserData] = useState({
          email: '',
          password: '',
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
                         <FaSignInAlt /> LogIn
                    </h1>
                    <p>Login and start setting goals!</p>
               </section>
               <section className='form'>
                    <form>
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