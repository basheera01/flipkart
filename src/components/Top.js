import React from 'react'
import pic1 from '../images/Screenshot 2023-10-10 215515.png';
export default function Top() {
  return (
    <>
    <div className='row top content1'>
    <div className='col-md-2'>
      <img src={pic1} className='log '/>
    </div>
    <div className='lens col-md-5 bg'>
      <input type='text' className='in' placeholder=' Search for Products,Brands and More'/>
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div className='col-md-5'>
        <ul>
          <li><i class="fa-solid fa-box-open"></i>Become a Seller</li>
          <li><i class="fa-regular fa-user"></i>User <i class="fa-solid fa-angle-down"></i></li>
          <li><i class="fa-solid fa-cart-shopping"></i>Cart</li>
          <li><i class="fa-solid fa-ellipsis-vertical"></i></li>
        </ul>
    </div>
  </div>
  </>
  )
}
