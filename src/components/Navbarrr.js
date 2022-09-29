import React from 'react'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'
export default function Navbarrr() {
  const navigate = useNavigate();
    function placeOrder(){
      navigate('/Login')
    }
    
  function placeOrder1(){
    navigate('/Signup')
  }
  return (
    
    <nav className="navbar navbar-expand-lg sticky-top" style={{backgroundColor : "orange"}}>
    <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src={logo} id="logoimg" width="40" height="45" className="d-inline-block align-text-top" />
    </a>
      <a className="navbar-brand" href="/" style={{fontfamily: "Times",}}>ARS</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <b><a className="nav-link" href="#home">Home</a></b>
          </li>
          <li className="nav-item">
            <b><a className="nav-link" href="#about">About</a></b>
          </li>
          <li className="nav-item">
            <b><a className="nav-link" href="#teams">Our Team</a></b>
          </li>
          <li className="nav-item">
            <b><a className="nav-link" href="/Products">Products and Services</a></b>
          </li>
          <li className="nav-item">
            <b><a className="nav-link" href="#contactus">Contact Us</a></b>
          </li>
          
          
        </ul>
        
        <form className="d-flex" role="search">
          
          <button  type="button" className="btn btn-outline-danger" onClick={placeOrder} style={{backgroundColor:"black",width:"100px",marginRight:"2px"}}>Login</button>
          <button type="button" className="btn btn-outline-danger" onClick={placeOrder1} style={{backgroundColor:"black",width:"100px",marginRight:"2px"}}>Sign Up</button>
        </form> 
        
      </div>
    </div>
  </nav>
  )
}
