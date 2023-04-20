import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='w-full max-w-[1250px] m-auto px-[30px] py-[80px] min-h-[600px]'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout