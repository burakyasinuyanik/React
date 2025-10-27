import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import { useState } from "react"

export default function CardV2(){
  const [like,setLike]=useState(0)
  const handleClick=()=>setLike(prev=>prev+1)
return(
  <div>
    <CardHeader like={like}/>
    <button onClick={handleClick}>Like</button>
    <ul>
      <li>Lorem, ipsum dolor.</li>
      <li>Quam, exercitationem dolore.</li>
      <li>Molestiae, vitae ducimus.</li>
    </ul>
    <CardFooter like={like} handleClick={handleClick}/>
  </div>
)
}