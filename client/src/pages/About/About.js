import React from 'react'
import Layout from '../../components/Layout/Layout'
import './About.css'

const About = () => {
  return (
    <Layout title={"Về chúng tôi"}>
      <div className='about-section bg-secondary-subtle px-5 py-5'>
        <div className='container-fluid px-5'>
          <div className='row px-5'>
            <h2 className='text-center text-uppercase text-danger mb-5 fw-bold'>Về chúng tôi</h2>
            <div className='about-content gap-20 d-flex justify-content-center'>
              <div className='about-content-img col-6'>
                <img src='https://product.hstatic.net/200000101237/product/ve_moi1_91285416168045cfa29120de44deb27a_master.jpg' className='img-fluid' />
              </div>
              <div className='abou-content-detail col-6'>
                <h5 className='mb-5 fs-5 font-monospace fw-normal'><span className='fw-bold text-danger'>Film Ticket </span>là 1 trong những trang web bán vé phim lớn và uy tín nhất tại Việt Nam.
                Mục tiêu của chúng tui là trở thành mẫu công ty điển hình đóng góp cho sự phát triển không ngừng của ngành công nghiệp điện ảnh.</h5>
                <h5 className='mb-5 fs-5 font-monospace fw-normal'><span className='fw-bold text-danger'>Film Ticket </span> quan tâm đến những đối tượng khách hàng và khán giả ở những khu vực không có điều kiện tiếp cận nhiều với điện ảnh,
                bằng cách tạo cơ hội để cho họ có thể thưởng thức những bộ phim chất lượng cao thông qua các hoạt động cộng đồng. </h5>
                <h5 className='mb-5 fs-5 font-monospace fw-normal'><span className='fw-bold text-danger'>Film Ticket </span> sẽ tiếp tục cuộc hành trình bền bỉ trong việc góp phần xây dựng một nền công nghiệp điện ảnh Việt Nam ngày càng vững
                mạnh hơn cùng các khách hàng tiềm năng, các nhà làm phim, các đối tác kinh doanh uy tín, và cùng toàn thể xã hội.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About