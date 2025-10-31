import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Fav(){
  
  const [favs,setFavs]=useState([])
  useEffect(()=>{

    setFavs(JSON.parse(localStorage.getItem("favs")??[]))
  },[])
  return(
    <>
    <h1>favoriler</h1>
    
     <div className="list-group">
      {
        favs.map((item,key)=>
        <Link className="list-group-item list-group-item-action" key={key} 
        to={`/products/product/${item.id}`}
        >{item.title.toUpperCase()}
        </Link>)
      }         
      </div>
    </>
  )
}