import USERS from "../data/users";
const Items=[1,2,3];
function UserList(){
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

function SingleUser(){
  return <h1>Ahmet falan filan</h1>
}
export {Items,UserList,SingleUser}