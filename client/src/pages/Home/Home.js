import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {useOrder} from '../../context/order'
import Layout from '../../components/Layout/Layout'
import {Film} from '../../data/Film'
import "./Home.css"
import toast from 'react-hot-toast'
import { BiMessageRoundedDetail } from "react-icons/bi"
import { IoIosAdd } from "react-icons/io";
const Home = () => {
  const navigate = useNavigate()
  const [order, setOrder] = useOrder()
  return (
    <Layout title={'Trang chủ'}>
      <div className='section-1 px-5 bg-secondary-subtle pb-5'>
        <div className='container-fluid px-5'>
          <div className='row py-5 px-5'>
            <div className='col-lg-12 text-center'>
              <p className='text-uppercase text-danger fs-3 fw-bold'>DANH SÁCH PHIM</p>
            </div>
          </div>
          <div className='row px-5 pb-5'>
            <div className='col-lg-12 film-list d-flex flex-wrap justify-content-between mx-auto gap-20'>
              {Film?.map(f => (
                <div className='card' style={{width: '17.5rem'}} key={f._id}>
                  <img src={f.image} width={"268px"} height={"278px"}/>
                  <div className="card-body px-2 py-2 bg-warning-subtle">
                    <h6 className='card-title text-center fw-bold font-monospace'>{f.name}</h6>
                    <div className='card-details d-flex justify-content-between align-items-center'>
                      <p className='card-status fw-normal'>Trạng thái: {f.status}</p>
                      <p className='card-price text-danger fw-bolder'>{f.price}đ</p>
                    </div>
                    <div className='film-btn d-flex align-items-center justify-content-center'>
                      <button className='add-btn btn btn-success' onClick={() => {
                        setOrder([...order, f])
                        localStorage.setItem('order', JSON.stringify([...order, f]))
                        toast.success("Thêm vé thành công!")
                      }}>
                        <IoIosAdd />
                        <span className='fw-semibold mx-1'>Đặt vé ngay</span>
                      </button>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home