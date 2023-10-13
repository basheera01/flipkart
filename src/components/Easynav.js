import React from 'react'
import pic1 from '../images/1.png';
import pic3 from '../images/3.webp';
import pic4 from '../images/4.webp'
import pic2 from '../images/2.webp'
import pic5 from '../images/5.webp'
import pic6 from '../images/6.webp'
import pic7 from '../images/7.webp'
import pic8 from '../images/8.webp'
import pic9 from '../images/9.webp'
import pic10 from '../images/10.webp'
export default function Easynav() {
  return (
    <>
        <div className='col-md-1 easynav'>
        <img src={pic1}/>
            <h6>Top Offers</h6>
        </div>
        <div className='col-md-1 easynav'>
        <img src={pic2}/>
            <h6>Mobiles & Tablets</h6>
        </div>
        <div className='col-md-1 easynav'>
        <img src={pic3}/>
            <h6>Electronics</h6>
        </div>
        <div className='col-md-1 easynav'>
        <img src={pic4}/>
            <h6>TV & Appliances</h6>
        </div>
        <div className='col-md-1 easynav'>
        <img src={pic5}/>
            <h6 >Fashion</h6>
        </div>
        <div className='col-md-1 easynav'>
        <img src={pic6}/>
            <h6>Beauty</h6>
        </div>
        <div className='col-md-1 easynav'>
        <img src={pic7}/>
            <h6>Home & Kitchen</h6>
        </div>
        <div className='col-md-1 easynav'>
        <img src={pic8}/>
            <h6 >Furniture</h6>
        </div>
        <div className='col-md-1 easynav'>
        <img src={pic9}/>
            <h6>Flights</h6>
        </div>
        <div className='col-md-1 easynav'>
        <img src={pic10}/>
            <h6>Grocery</h6> 
            </div>
            </>
  )
}
