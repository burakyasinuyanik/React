import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard"

export default function Category(){
  const {categoryName}=useParams()
  const [categoryProduct,setCategoryProducts]=useState([])

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
              .then(res=>res.json())
              .then(res=>setCategoryProducts(res))
              .catch(err=>console.log(err))
  }
        ,[categoryName])
  return(
    <>
    <h6>Karegori:{categoryName.toUpperCase()}</h6>
    <div className="row row-cols-sm-3 row-cols-md-4">
      {categoryProduct.map(item=><ProductCard key={item.id} item={item}/>)}
      </div>
    </>
  )
}