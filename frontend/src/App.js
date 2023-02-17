import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import DashBoard from '../src/pages/Dashboard';
import Register from '../src/pages/Register';
import LogIn from '../src/pages/Login';

function App() {
  return (
    <div className='container'>
      <Router>
          <Header/>
       <Routes>
        <Route path="/" element={<DashBoard/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
