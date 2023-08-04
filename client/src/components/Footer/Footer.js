import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className='footer px-5 bg-dark'>
        <div className='container-fluid px-5'>
          <div className='row py-5 px-5'>
              <div className='col-lg-12'>
                <Link className='text-white fs-5'>Bạn có câu hỏi? Liên hệ với chúng tôi</Link>
              </div>
          </div>
          <div className='row px-5'>
            <div className='col-lg-4 d-flex flex-column'>
              <Link className='text-white py-1 fs-6'>Câu hỏi thường gặp</Link>
              <Link className='text-white py-1 fs-6'>Trung tâm đa phương tiện</Link>
              <Link className='text-white py-1 fs-6'>Các cách xem</Link>
              <Link className='text-white py-1 fs-6'>Tùy chọn Cookie</Link>
              <Link className='text-white py-1 fs-6'>Kiểm tra tốc độ</Link>
            </div>
            <div className='col-lg-4 d-flex flex-column'>
              <Link className='text-white py-1 fs-6'>Trung tâm trợ giúp</Link>
              <Link className='text-white py-1 fs-6'>Quan hệ với nhà đầu tư</Link>
              <Link className='text-white py-1 fs-6'>Điều khoản sử dụng</Link>
              <Link className='text-white py-1 fs-6'>Thông tin doanh nghiệp</Link>
              <Link className='text-white py-1 fs-6'>Thông tin pháp lý</Link>
            </div>
            <div className='col-lg-4 d-flex flex-column'>
              <Link className='text-white py-1 fs-6'>Tài khoản</Link>
              <Link className='text-white py-1 fs-6'>Việc làm</Link>
              <Link className='text-white py-1 fs-6'>Quyền riêng tư</Link>
              <Link className='text-white py-1 fs-6'>Liên hệ với chúng tôi</Link>
              <Link className='text-white py-1 fs-6'>Chỉ có trên Film Ticket</Link>
            </div>
          </div>
          <div className='row py-5 px-5'>
            <div className='col-lg-12'>
              <span className='text-white fs-6'>Copyright &copy; { new Date().getFullYear()}: Powered by Lê Kim Quốc Chung</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer