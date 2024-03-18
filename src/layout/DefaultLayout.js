import React from 'react'
import { Nav, Banner, Footer } from '../component/index'
import NavBar from "../component/Nav";

const DefaultLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Banner />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout
