import React from 'react'
import delivery from './delivery.jpg'
import slide1 from './slide1.png'

export default function Carousel() {
  return (
    <div id='home'>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 h-10" style={{height: "20em",}} src={slide1} alt="First slide"/>
    </div>
    <div className="carousel-item">
    <img className="d-block w-100 h-10" style={{height: "20em",}} src={delivery} alt="First slide"/>
    </div>
    
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
  )
}
