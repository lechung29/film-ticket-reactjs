import React from 'react'
import Layout from '../../components/Layout/Layout'
import { toast } from 'react-hot-toast'
import './Contact.css'

const Contact = () => {
  return (
    <Layout title={"Liên hệ với chúng tôi"}>
        <div className='wrapper-contact bg-secondary-subtle px-5 py-5'>
          <div className='container-fluid px-5'>
            <h2 className='wrapper-contact-title position-relative text-center mb-4 px-5'>
              <span className='positon-relative text-uppercase text-danger fw-bold'>Liên hệ với chúng tôi</span>
            </h2>
            <div className='contact-section d-flex '>
              <div className='contact-section px-5 col-6'>
                <div className='contact-form gap-15'>
                  <div className='contact-input-group py-2'>
                    <input type='text' className='form-control'id='input-name' placeholder='Your Name' required='required' data-validation-required-message='Please enter your name' aria-invalid='false'/>
                  </div>
                  <div className='contact-input-group py-2'>
                    <input type='email' className='form-control'id='input-email' placeholder='Your Email' required='required' data-validation-required-message='Please enter your email' aria-invalid='true'/>
                  </div>
                  <div className='contact-input-group py-2'>
                    <input type='text' className='form-control'id='input-subject' placeholder='Subject' required='required' data-validation-required-message='Please enter your subject' aria-invalid='false'/>
                  </div>
                  <div className='contact-input-group py-2'>
                    <textarea className='form-control' rows='6' id='input-message' placeholder='Message' required='required' data-validation-required-message='Please enter your message' aria-invalid='false'></textarea>
                  </div>
                  <div>
                    <button className='btn btn-warning mt-1'id='send-message-btn'  type='submit' onClick={() => {toast.success("Gửi thành công")}}>Send Message</button>
                  </div>
                </div>
              </div>
              <div className='contact-section px-5 col-6'>
                <div className='wrapper-map py-2 '>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.3309473175814!2d108.23450901480754!3d16.04830718889381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219d8896810f1%3A0x4b40f2114ba45a20!2zNzAvMiBN4bu5IEFuIDcsIELhuq9jIE3hu7kgUGjDuiwgTmfFqSBIw6BuaCBTxqFuLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1678723843888!5m2!1svi!2s" 
                    width="600" 
                    height="300" 
                    className='border-0 w-100' 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Contact