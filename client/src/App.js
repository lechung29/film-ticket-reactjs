import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Order from './pages/Order/Order'
import About from './pages/About/About'
function App() {
  window.onbeforeunload = function (e) {
    localStorage.clear();
  };
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About />} />
          <Route path='/order' element={<Order />} />
        </Routes>
    </>
  );
}

export default App;
