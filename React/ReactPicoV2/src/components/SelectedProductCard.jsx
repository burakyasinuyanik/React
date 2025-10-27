export default function SelectedProductCard({product,removeSelectedProduct}){
  console.log(product.isActive)
  return(
    <>
        <article>
          <header><button onClick={()=>removeSelectedProduct(product.id)}>Seçimi Kaldır</button></header>
          <img src={product.imgName}/>
          </article>
        </>
  )
}