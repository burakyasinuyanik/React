import React from "react"
import "./App.css"
export default App
import { Items, UserList,SingleUser } from "./components/UserList";
import Button from "./components/Button";
import ImgThumbnail from "./components/ImgThumbnail";
import {IMAGES,INFO,USERS} from "./data"
import Card from "./components/Card";
import ConditionalRenderedUserList from "./components/ConditionalRenderedUserList";
// return ederken html elementi ve sadece parent elementi gönderebilirsin.fragment yapısı ile birden fazla gönderebilirsin <></>
//süslü parantez ile javascript yapısını çalıştırabilirsin
//bir etiket mutlaka sonlanmalıdır.
//class bilgileri classname olmalıdır.
//map kullanırken mutlaka key kullanılmalıdır.
//sytle gönderirken mutlaka {{ içinde style verilmeli}}
//eğer bir component oluşturacaksak ilk harfleri büyük olmalıdır.
function App(){
  const userName="burak";
  const users=["ahmet","mehmet"];
  const mapperUsers=users.map((item,key)=><li key={key}>{item}</li>)
  const products = [
    {id: 1,name: "MacBook Pro 14", inStock: false},
    {id: 2,name: "MacBook Pro 13", inStock: true},
    {id: 3,name: "iPad", inStock: false},
    {id: 4,name: "Lenovo 14", inStock: true},
    {id: 5,name: "Dell XPS", inStock: true},
  ]
  return <React.Fragment>
  <h1 className="bg-red">Merhaba {userName}</h1>
  <h2>react</h2>
  <h2>react {2+2}</h2>
  <Button/>
  <h3>{users.length}</h3>
  <ul>
    {mapperUsers}
  </ul>
  <ul style={{backgroundColor:"yellow"}}>
    {users.map((item,key)=><li key={key}>{item}-</li>)}
  </ul>
  <ul>
      {products
        .filter(item => item.inStock)
        .map(item => 
          <li key={item.id}>{item.name.toUpperCase()}</li>
        )
      }
    </ul>
    
    <UserList/>
    <SingleUser/>
    {[...Array(10)].map((item,key)=>  <SingleUser key={key}/>)}
    {Items.map((item,key)=><h6 key={key}>{item}</h6>)}
    <hr/>
    {IMAGES.map((item,key)=><li key={key}><ImgThumbnail imgSrc={item} key={key} imgAlt=""/></li>)}
    {USERS.map((item,key)=><li key={key}>{item}</li>)}
    <hr/>
    {/* {IMAGES.map((item,key)=><Card key={key} title={"Merhabav2"} imgSrc={item}  />)} */}
    <Card imgSrc={"https://picsum.photos/id/237/600/240"} imgAlt={"pictureVs"} dataId={22}>
      <p>Lorem, ipsum dolor.</p>
      <p>Suscipit, omnis quod?</p>
      <p>Eaque, voluptas est!</p>
    </Card>
    <ConditionalRenderedUserList isActive={false} />
    <hr/>
      {INFO.products?.map((item,key)=><li key={key}>{products}</li>)}
  </React.Fragment>
}

//component
// function ImgThumbnail(){
//   return <img src="https://picsum.photos/600/300" alt="" style={{padding:"4px", 
//     borderRadius:"8px",
//     border:"1px solid #bdc3c7"
//   }}/>
// }
