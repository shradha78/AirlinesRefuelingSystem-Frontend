import React from 'react'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <a className="navbar-brand ms-2" href="#" style={{color: "red",}}>S3AC</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Products and Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Our Team</a>
      </li>
    </ul>
        <button type="button" className="btn btn-outline-success me-2">Login</button>
  </div>
</nav>
  )
}
