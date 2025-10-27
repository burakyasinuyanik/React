import ProductCartBtn from "./ProductCardBtn";

export default function ProductCard({product,handleProductSelect}){
  
  return(
    <>
    <article>
      <header>{product.name}</header>
      <img src={product.imgName}/>
      <footer><ProductCartBtn handleProductSelect={handleProductSelect} productId={product.id}/></footer>
    </article>
    </>
  )
}