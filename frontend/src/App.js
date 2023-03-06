import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import Header from '../src/components/Header';
import DashBoard from '../src/pages/Dashboard';
import Register from '../src/pages/Register';
import LogIn from '../src/pages/Login';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className='container'>
      <Router>
        <Header />
       <Routes>
        <Route path="/" element={<DashBoard/>} />
          <Route path="/login" element={<LogIn  />} />
        <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
