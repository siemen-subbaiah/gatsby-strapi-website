import React from "react"
import Footer from "./Footer"
import NavBar from "./Navbar"
import "../css/style.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
