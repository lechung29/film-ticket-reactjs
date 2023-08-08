import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <>
      <header className='header bg-dark'>
        <div className='container-fluid px-5'>
          <div className='row py-5 px-5'>
            <div className='col-lg-9 px-5'>
              <Link className='logo text-decoration-none' to='/'>
                <span className='text-uppercase fw-bolder fs-1 text-danger font-monospace'>Films Ticket</span>
              </Link>
            </div>
            <div className='col-lg-3'>
              <div className='page-link d-flex align-items-center justify-content-between'>
                <NavLink className='navbar-item text-decoration-none page-link-items py-2 fs-5' to='/order'>Đặt vé</NavLink>
                <NavLink className='navbar-item text-decoration-none page-link-items py-2 fs-5' to='/contact'>Liên hệ</NavLink>
                <NavLink className='navbar-item text-decoration-none page-link-items py-2 fs-5' to='/about'>Về chúng tôi</NavLink>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header