import { useEffect, useState } from "react"
import { ProductCard } from "../products"
export default function Products({user}){
  const [lastTenProducts,setLastTenProducts]=useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products?limit=10").then(res=>res.json()
      .then(res=>setLastTenProducts(res))
  )
  },[])
return(
  <>
  <h2>Ürünler:</h2>
    <div className="row row-cols-sm-3 row-cols-md-4">
      {lastTenProducts.map(item=><ProductCard user={user} key={item.id} item={item}/>)}
    </div>
  </>
)
}