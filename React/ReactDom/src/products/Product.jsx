import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Product(){

  const {productId}=useParams()

  const[product,setProduct]=useState({})
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res=>res.json())
      .then(res=>setProduct(res))
      .catch(err=>console.log(err))
    
  },[productId])

  return(
    <>
    <div className="col-sm mb-3">
      <div className="card">
        
        <img src={product.image} className="card-img-top p-3" alt={product.title}/>
        
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}...</p>
          <p className="card-text">{product.price}</p>
          <a href="#" className="btn btn-primary">Fav</a>
        </div>
      </div>
    </div>
    </>
  )
}