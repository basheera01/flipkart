import React, { useState,useEffect } from 'react'
import axios from 'axios'
export default function Form() {
    const [id,setId]=useState('')
    const [title,setTitle]=useState('')
    const [brand,setBrand]=useState('')
    const [price,setPrice]=useState('')
    const [des,setDes]=useState('')
    const [img,setImg]=useState('')
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
        if(pid==""){
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
    const[products,setProducts]=useState([{}]);
    const fetchData=()=>{
            axios.get('http://localhost:3002/products')
            .then(res=>setProducts(res.data))
        }
    console.log(products)
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3002/products/${id}`)
        .then((res)=>{
            alert('Product Deleted')
            fetchData()
        })
    }
    useEffect(()=>{
        fetchData()
    },0)
  return (
   <>
           <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-6" style={{backgroundColor:"#D988B9"}}>
                    <form method="post" onSubmit={handleSubmit}>
                    <h2 className="text-center">Add Products</h2><hr></hr>
                    <div className="mb-3">
                        <label>Product Id:</label>
                        <input type="text" name="" class="form-control"  placeholder="enter id" value={id} onChange={(e)=>{setId(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label>ProductName:</label>
                        <input type="text" name="" class="form-control" placeholder="enter name" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label>Brand</label>
                        <input type="text" name="" class="form-control" placeholder="enter brand" value={brand} onChange={(e)=>{setBrand(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label>Price</label>
                        <input type="text" name="" class="form-control" placeholder="enter price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label>Description</label>
                        <textarea type="text" name="" class="form-control" style={{paddingBottom:"50px"}} value={des} onChange={(e)=>{setDes(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label>Image</label>
                        <input type="text" name="" class="form-control" placeholder="image url" value={img} onChange={(e)=>{setImg(e.target.value)}}/>
                    </div>
                    <button className="btn btn-success mb-3">submit</button>
                </form>
            </div>
        </div>
    </div>
    <table  className='table table-bordered table-responsive++ mt-3'>
      <thead>
          <tr>
              <th>SNo</th>
              <th>Product id</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
          </tr>
      </thead>
      <tbody>
              {
                products.map((e,i)=>{
                    return(
                        <>
                        <tr>
                            <td>{sno++}</td>
                            <td>{e.productId}</td>
                            <td>{e.title}</td>
                            <td>{e.brand}</td>
                            <td>{e.price}</td>
                            <td>{e.description}</td>
                            <td><img src={e.thumbnail}  style={{width:"10rem",height:"8rem"}} className="card-img-top pl" alt="..."/></td>
                            <td><button onClick={()=>handleEdit(e)}><i id="actions1" i class="fa-solid fa-pen-to-square"></i> </button><button onClick={()=>handleDelete(e.id)}><i id="actions2" class="fa-solid fa-trash-can"></i></button></td>
                        </tr>
                        </>
                    )
                })
            } 
        </tbody>
    </table>
   </>
  )
}