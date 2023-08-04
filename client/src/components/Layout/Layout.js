import React from 'react'
import {Helmet} from 'react-helmet'
import {Toaster} from 'react-hot-toast'
import Header from "../Header/Header.js"
import Footer from '../Footer/Footer.js'
 
const Layout = ({children, title, description, keywords, author}) => {
  return (
    <>
        <Helmet>
            <meta charSet='ulf-8' />
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta name='author' content={author} />
            <title>{title}</title>
        </Helmet>
        <Header />
        <main style={{minHeight : '80vh'}}>
            <Toaster />
            {children}
        </main>
        <Footer />
    </>
  )
}
Layout.defaultProps = {
  title: 'fiml-ticket',
  description: 'react-app',
  keywords: 'react-app, reactjs, film-ticket',
  author: 'LeChung924'
}
export default Layout