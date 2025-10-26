import React from "react"
import "./App.css"
export default App
// return ederken html elementi ve sadece parent elementi gönderebilirsin.fragment yapısı ile birden fazla gönderebilirsin <></>
//süslü parantez ile javascript yapısını çalıştırabilirsin
//bir etiket mutlaka sonlanmalıdır.
//class bilgileri classname olmalıdır.
//map kullanırken mutlaka key kullanılmalıdır.
//sytle gönderirken mutlaka {{ içinde style verilmeli}}
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
  </React.Fragment>
}