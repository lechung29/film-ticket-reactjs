import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Order from './pages/Order/Order'
import Film from './pages/Film/Film'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/order' element={<Order />} />
          <Route path='/film' element={<Film />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
