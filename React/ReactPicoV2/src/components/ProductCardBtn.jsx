export default function ProductCartBtn({productId,handleProductSelect}){

  return(
    <button onClick={()=>handleProductSelect(productId)} className="outline">seç</button>
  )
}