import { useState } from 'react'
import { product as productsObj } from './data/products'
import ImgNotSelected from './components/ImgNotSelected'
import ImgContainer from './components/ImgContainer'
import ProductCard from './components/ProductCard'
import SelectedProductCard from './components/SelectedProductCard'
function App() {
  const [product, setProduct] = useState(productsObj)
  const [isActiveProduct, setIsActiveProduct] = useState(productsObj.find(item=>item.isActive))
  
  function removeSelectedProduct(id){


    const notSelectedProduct=productsObj
    .map(item=>{
      return{
        ...item,
        isActive:false
      }
    });
     setIsActiveProduct(null)
    setProduct(()=>{
      return [
        ...notSelectedProduct,
        
      ]
    })

  }
  function handleProductSelect(id){
    
    const selectedProduct=productsObj.find(item=>item.id==id)
  
    selectedProduct.isActive=true


    
    const notSelectedProduct=productsObj.filter(item=>item.id!=id)
    .map(item=>{
      return{
        ...item,
        isActive:false
      }
    });
    setIsActiveProduct(selectedProduct)
    setProduct(()=>{
      return [
        ...notSelectedProduct,
        
      ]
    })
    
  }
  return (
    <>
      <main className='container'>
        {
          isActiveProduct ? <><SelectedProductCard product={isActiveProduct} removeSelectedProduct={removeSelectedProduct} /> </>:<ImgNotSelected/>
        }
        <ImgContainer handleProductSelect={handleProductSelect} products={product}/>
      </main>
    </>
  )
}

export default App
