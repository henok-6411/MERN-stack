import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { reset, logout } from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';


const Header = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const { user, isSuccess } = useSelector((state) => state.auth);

     const logoutHandler = () => {
          dispatch(logout());
          dispatch(reset());
          navigate('/');
     }
     console.log('success', isSuccess)
     return (
          <header className='header' >
               <div className='logo'>
                    <Link to="/" > GoalSetter</Link>
               </div>
               <ul>
                    {
                         user ? (
                              <li>
                                   <button className='btn' onClick={logoutHandler}>
                                        <FaSignOutAlt /> Logout
                                   </button>
                              </li>
                         ) : (<>
                              <li>
                                   <Link to="/login" >
                                        <FaSignInAlt /> LogIn
                                   </Link>
                              </li>

                              <li>
                                   <Link to="/register" >
                                        <FaUser />
                                        Register
                                   </Link>
                              </li>
                         </>)
                    }

               </ul>
          </header>
     )
}
export default Header;