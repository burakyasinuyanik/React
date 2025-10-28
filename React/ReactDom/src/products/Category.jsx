import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Category(){

  const [categories,setCategories]=useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/categories").then(res=>res.json())
             .then(res=>setCategories(res))

  },[])
  return(
    <>
    <h1>Kategoriler</h1>
     <div className="list-group">
      {
        categories.map((item,key)=>
        <Link className="list-group-item list-group-item-action" key={key} 
        to={`/products/category/${item}`}
        >{item.toUpperCase()}
        </Link>)
      }         
      </div>
    </>
  )
}