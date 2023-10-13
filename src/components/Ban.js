import React from 'react'

export default function Carousel() {
  return (
    <>
       <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8bf2beb6903ca674.jpg?q=20" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0ded2a768b23a1a3.jpg?q=20" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8c2d12c1b3b3cfbf.jpg?q=20" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a6043916f4b1f793.jpeg?q=20" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/99fae2c9891a1c0c.jpeg?q=20" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f9c2b82608c2f227.jpeg?q=20" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev prev-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next nxt-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}