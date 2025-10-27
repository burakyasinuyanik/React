import { USERS } from "../data"
export default function ConditionalRenderedUserList(props){
  if(!props.isActive){
    return <h1>Lütfen giriş yapınız</h1>
  }
  return(
     <>
      <h1>Kullanıcılar</h1>
      <ul>
        <li>Lorem.</li>
        <li>Quo.</li>
        <li>Rerum?</li>
        <li>Placeat.</li>
        <li>Ipsum.</li>
        <hr/>
        {USERS.map((item,key)=><li key={key}>{item}- {key}</li>)}
      </ul>
      </>
    )
}