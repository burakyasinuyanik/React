import { useState } from "react"

function App() {
 const pictureIds=[200,201,202,203,204]
 const [imageId,setImageId]=useState(pictureIds[0]);

  const getLoremPicsumImg=(id,width=800,height=450)=>`https://picsum.photos/id/${id}/${width}/${height}`

  function handleClick(id){
    setImageId(id)
    console.log(id)
  }
  return (
    <main className="container">
      <hgroup>
      <h2>Mini Görsel Uygulaması v1</h2>  
      <h3>Görseller:</h3>    
      </hgroup>
      <img src={getLoremPicsumImg(imageId)} alt="" style={{width:"100%"}}/>
      <div className="grid">
        {
          pictureIds.map((item,key)=><div key={key}><img
           key={key} 
           src={getLoremPicsumImg((item),100,100)}
           onClick={()=>handleClick(item)}
           /></div>)
        }
        
      </div>
    </main>
  )
}

export default App
