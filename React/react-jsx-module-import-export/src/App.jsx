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
  </React.Fragment>
}