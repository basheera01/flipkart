import axios from 'axios'
import React from 'react'
import { useState ,useEffect} from 'react'
export default function Form() {
 const [id,setId]=useState('')
 const [brand,setBrand]=useState('')
 const [price,setPrice]=useState('')
 const [des,setDes]=useState('')
 const [img,setImg]=useState('')
 const [title,setTitle]=useState('')
 const[pid,setPid]=useState('');
 const productData={
    productId:id,
    title:title,
    brand:brand,
    price:price,
    description:des,
    thumbnail:img
 }
 const handleSubmit=(e)=>{
  e.preventDefault();
  if(pid===""){
  axios.post('http://localhost:3002/products',productData)
  .then((res)=>{
      alert('success')
      fetchData()
      setId('')
      setTitle('')
      setBrand('')
      setDes('')
      setImg('')
      setPrice('')
  })
}
else{
  axios.put(`http://localhost:3002/products/${pid}`,productData)
  .then((res)=>{
      alert('success')
      fetchData()
      setId('')
      setTitle('')
      setBrand('')
      setDes('')
      setImg('')
      setPrice('')
  })
}
}
const handleEdit=(ed)=>{
  const {id,title,brand,price,des,img}=ed
  alert(title)
  setId(ed.productId);
  setTitle(ed.title);
  setBrand(ed.brand);
  setPrice(ed.price);
  setDes(ed.description);
  setImg(ed.thumbnail);
  setPid(ed.id);
  fetchData();
}
 let sno=1;
 const [products,setProducts]=useState([{}])
 const fetchData=()=>{
  axios.get('http://localhost:3002/products')
  .then((res)=>setProducts(res.data))
}
   console.log(products)
   const handleDelete=(id)=>{
     axios.delete(`http://localhost:3002/products/${id}`)
     .then((res)=>{
         alert('Product Deleted');
         fetchData()
     })
  }
  
useEffect(()=>{
    fetchData()
   },0)
  return (
    <>
     <br />
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-4 bg-warning">
                <br />
                <h2 class="text-center text-white">Form</h2>
                <hr />
                <form method="post" onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label><i>Product ID</i></label>
                        <input type="text" placeholder="enter product id" value={id} onChange={(e)=>setId(e.target.value)} class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label><i>Product Title</i></label>
                        <input type="text" placeholder="enter product title" value={title} onChange={(e)=>setTitle(e.target.value)} class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label><i>Brand</i></label>
                        <input type="text" placeholder="enter brand" value={brand} onChange={(e)=>setBrand(e.target.value)} class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label><i>Price:</i></label>
                        <input type="number" placeholder="enter price" value={price} onChange={(e)=>setPrice(e.target.value)} class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label><i>Description:</i></label>
                        <textarea type='text' placeholder="enter description" value={des} onChange={(e)=>setDes(e.target.value)} class='form-control'/>
                    </div>
                    <div class='mb-3'>
                        <label>Image URL:</label>
                        <input type='url' placeholder='enter image url' value={img} onChange={(e)=>setImg(e.target.value)} class='form-control'/> 
                    </div>
                    <div class="mb-3">
                         <button class="btn btn-success">Submit</button>
                    </div>
                    <hr />
                </form>
            </div>
        </div>
    </div>
    <br/>
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
                    <td><button onClick={()=>handleEdit(element)}><i id='actions1' class="fa-solid fa-pen-to-square"></i></button>
                         <button onClick={()=>handleDelete(element.id)}><i id="actions2" class="fa-solid fa-trash-can" ></i></button></td>
                  </tr>
                )
              })
            
          }
      </tbody>
    </table>
    </>
  )
}

