import { useState } from "react";
import ImgThumbnail from "./ImgThumbnail";

export default function CreateMultipleImages(){
  const [imageCounter,setImageCounter]=useState(1)
  // function handleAddNewImage(){
  //   setImageCounter(imageCounter+1)
  // }
  // function handleSubtractImage(){
  //   setImageCounter(imageCounter-1)
  // }
  function handleClick(event){
    event.target.id==="add"? 
    setImageCounter(prev=>prev+1):
    setImageCounter(prev=>prev>0 ? prev-1:prev)
  }
  return(
    <>
    <button id="add" onClick={handleClick}>Yeni Görsel Ekle</button>
    <button id="subtract" onClick={handleClick}>Görsel Sil</button>
    {
      [...Array(imageCounter)].map((item,key)=> <ImgThumbnail key={key} imgSrc={`https://picsum.photos/id/${200+key}/15/50`} />)
    }
    

    </>
  )
}