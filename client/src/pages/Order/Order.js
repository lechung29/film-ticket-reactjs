import React, {useEffect, useState} from 'react'
import Layout from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import {useOrder} from '../../context/order'
import { toast } from 'react-hot-toast'
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdRemove } from "react-icons/io";
import './Order.css'
import { CiCircleRemove } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Order = () => {
    const navigate = useNavigate()
  const [order, setOrder] = useOrder()
  const [isActive, setIsActive] = useState(false)
  const totalPrice = () => {
    try {
      let total = 0;
      order?.map(item => {total = total + item.price})
      return total
    } catch (error) {
      console.log(error)
    }
  }
  const getFilmItem = () => {
    try {
      let myOrder = [...order]
      localStorage.setItem('order', JSON.stringify(myOrder))
      setOrder(myOrder)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getFilmItem()
  },[])

  const removeFilmItem = (fid) => {
    try {
      let myOrder = [...order]
      let index = myOrder.findIndex(item => item._id === fid)
      myOrder.splice(index,1)
      setOrder(myOrder)
      localStorage.setItem('order', JSON.stringify(myOrder))
    } catch (error) {
      console.log(error)
    }
  } 

  const handlePlus = (fid) => {
    try {
      let myOrder = [...order]
      let index = myOrder.findIndex(item => item._id === fid)
    } catch (error) {
      console.log(error)
    }
  }
  const handleOpen = event => {
    setIsActive(true)
  }

  const handleClose = event => {
    setIsActive(false)
  }

  const handleBackHome = () => {
    navigate('/')
    setOrder([])
  }
  return (
    <Layout className="order position-relative"  title={"Đặt vé ngay"}>
        <div className='order-section bg-secondary-subtle px-5 py-5'>
          <div className='container-fluid px-5'>
            <div className='row px-5 d-flex align-items-center justify-content-between'>
              <div className='order-title'>
                <h2 className='text-center text-uppercase fw-bold mb-4 text-danger'>Vé phim của tôi!</h2>
                <hr/>
                <div className='list-item'>
                  {
                  order?.map(f => (
                    <div className='film-item d-flex align-items-center pb-2' key={f._id}>
                        <div className='film-item-img col-2'>
                          <img src={f.image} className="" width={"134px"} height={"139px"} alt={f.name}/>
                        </div>
                        <div className='film-item-info px-3 col-7 d-flex flex-column gap-10'>
                          <h4 className='film-item-name font-monospace fw-semibold'>{f.name}</h4>
                          <h5 className='film-item-time fst-italic fw-light'><span className='fst-normal fw-normal'>Thời lượng :</span> {f.time}</h5>
                          <h5 className='film-item-status fst-italic fw-light'><span className='fst-normal fw-normal'>Tình trạng :</span> {f.status}</h5> 
                        </div>
                        <div className='col-2 film-item-price text-center'>
                          <span className='text-center fst-italic text-danger fw-normal'>{f.price}đ</span>
                        </div>
                        <div className='col-1 film-item-action text-end'>
                          <button className='remove-btn btn btn-danger' onClick={() => removeFilmItem(f._id)}>Xóa vé</button>
                        </div>
                    </div>
                  ))
                  }
                </div>
                <hr/>
                <div className='col-12 checkout-section d-flex flex-row-reverse align-items-center  '>
                  <div className='col-1 text-end'>
                    <button className='btn btn-info fw-semibold check-btn' onClick={handleOpen}>Kiểm tra</button>
                  </div>
                  <div className='col-2 text-start'>
                    <span className='total-price text-danger fw-normal fst-italic'><span className='fw-semibold fst-normal text-dark mx-2'>Tổng cộng: </span>{totalPrice()}đ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>    
        </div>
        <div className={isActive ? "active-display content-box" : "content-box"}>
          <AiOutlineClose className='close-btn' onClick={handleClose}/>
          <div className='infor-content'>
            <h1 className="text-center text-uppercase fw-bolder font-monospace text-danger">Thông tin đặt vé</h1>
            <div className='infor-form gap-15'>
              <div className='infor-input-group py-2'>
                <span className='fw-semibold'>Họ tên người đặt</span>
                <input type='text' className='my-2 form-control'id='input-name' placeholder='Nhập tên của bạn!' required title="Please enter your name" data-validation-required-message='Please enter your name' aria-invalid='false'/>
              </div>
              <div className='infor-input-group py-2'>
                <span className='fw-semibold'>Số điện thoại người đặt</span>
                <input type='text' className='form-control'id='input-phone' placeholder='Nhập SĐT của ban!' required='required' data-validation-required-message='Please enter your phone' aria-invalid='true'/>
              </div>
              <div className='infor-input-group py-2'>
                <span className='fw-semibold'>Địa chỉ Email</span>
                <input type='email' className='form-control'id='input-email' placeholder='Nhập địa chỉ email của ban!' required='required' data-validation-required-message='Please enter your email' aria-invalid='true'/>
              </div>
              <div className='infor-input-group py-2'>
                <span className='fw-semibold'>Địa chỉ nhận vé</span>
                <input type='text' className='form-control'id='input-address' placeholder='Nhập địa chỉ nhận vé của ban!' required='required' data-validation-required-message='Please enter your address' aria-invalid='true'/>
              </div>
            </div>
            <div className='infor-action mt-3 d-flex flex-row-reverse'>
              <button className='submit-btn btn btn-success'type='submit' onClick={() => {
                toast.success("Đặt vé thành công")
                localStorage.removeItem('order')
                setTimeout(handleBackHome, 2000)
              }}>Xác nhận đặt vé</button>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Order