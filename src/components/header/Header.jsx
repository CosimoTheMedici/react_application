import React from 'react'
import Nav from '../nav/Nav'

const Header = () => {
  return (
    <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><a href="index.html">Capital Hustle</a></h1>
       {/* <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a> */}
      <Nav/>
    </div>
  </header>
  )
}

export default Header