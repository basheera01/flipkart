import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
export default function Products() {
    const [products,setProducts]=useState([{}])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res=>setProducts(res.data.products))
    },0)
    console.log(products)
    return (
      <>
      {
          products.map((element,index)=>{
              return(
                  <>
                  <div class="card float-start product mt-1" style={{width:"23rem",height:"35rem"}}>
                    <img src={element.thumbnail}  style={{width:"21rem",height:"10rem"}} class="card-img-top mt-2" alt="..."/>
                  <div class="card-body">
                     <h5 class="card-title">{element.title}</h5>
                     <p class="card-text">{element.description}</p>
                   </div>
                   <ul class="list-group list-group-flush">
                             <li class='list-group-item'>{element.title}</li>
                              <li class="list-group-item"><span class="fnt">PRICE: </span><b>{element.price}</b></li>
                              <li class="list-group-item"><span class="fnt">Rating: </span><b>{element.rating}</b></li>
                    </ul>
                   <div class="card-body">
                            <a href="#" class="card-link product1">Card link</a>
                            <a href="#" class="card-link product1">Another link</a>
                    </div>
                  </div>
                </>
            )

        })
    }
    </>
  )
}
