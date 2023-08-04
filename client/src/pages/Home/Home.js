import React from 'react'
import Layout from '../../components/Layout/Layout'
import {Film} from '../../data/Film'
const Home = () => {
  return (
    <Layout title={'Trang chủ'}>
      <div className='section-1'>
        <div className='container-fluid'>
          <div className='row py-5 px-5'>
            <div className='col-lg-12 text-center'>
              <p className='text-uppercase text-danger fs-3 fw-semibold text-decoration-underline'>PHIM ĐANG CHIẾU</p>
            </div>
          </div>
          <div className='row px-5'>
            <div className='col-lg-12 film-list d-flex flex-wrap mx-auto'>
              {Film?.map(f => (
                <div className='card' style={{width: '18rem'}} key={f._id}>
                  <img src={f.image} width={"278px"} height={"278px"} />
                  <div className="card-body px-0 py-0 bg-warning-subtle">
                    <h6 className='card-title'>{f.name}</h6>

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