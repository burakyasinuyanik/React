import ProductCard from "./ProductCard";

export default function ImgContainer({products,handleProductSelect}){
  return(
    <>
    <div className="grid">
      {
        products.filter(item=>item.isAvailable==true).map((item,key)=><ProductCard  key={key} handleProductSelect={handleProductSelect} product={item}/>)
       }
    </div>
    </>
  )
}