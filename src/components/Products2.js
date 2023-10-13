import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
export default function Products2() {
  let sno=1;
  const [products,setProducts]=useState([{}])
    useEffect(()=>{
        axios.get('http://localhost:3002/products')
        .then(res=>setProducts(res.data))
    },0)
    console.log(products)
    const handleDelete=(id)=>{
      axios.delete(`http://localhost:3002/products/${id}`)
      .then((res)=>{
          alert('Product Deleted')
          fetchData()
      })
   }
   const fetchData=()=>{
    axios.get('http://localhost:3002/products')
    .then((res)=>setProducts(res.data))
 }
 /*useEffect(()=>{
  fetchData()
 })*/
  return(
    <>
    <table className='table table-bordered' style={{color:'white'}}>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Product Id</th>
          <th>Title</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Description</th>
          <th>Thumbnail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {
              products.map((element,index)=>{
                return(
                  <tr>
                    <td>{sno++}</td>
                    <td>{element.productId}</td>
                    <td>{element.title}</td>
                    <td>{element.brand}</td>
                    <td>{element.price}</td>
                    <td>{element.description}</td>
                    <td><img src={element.thumbnail} id='thumb'/></td>
                    <td><button><i id='actions1' class="fa-solid fa-pen-to-square"></i></button>
                         <button><i id="actions2" class="fa-solid fa-trash-can"onClick={()=>handleDelete(element.id)}></i></button></td>
                  </tr>
                )
              })
            
          }
      </tbody>
    </table>
  
   </>
  )
}
