export default function TaskList({tasks,removeTask,editTask}){
  if(tasks.length===0){
    return(
      <>
      </>
    )
  }

  return(
    <>
    <div className="p-3 bg-ligth mb-5 border rounded" >

    <h4 >Görevler</h4>
    <ul className="list-group my-3 ">
      {tasks.map((item,key)=>
      <li className="list-group-item" key={key}>{item.task}-<span>{item.priority?"öncelikli":"önceliksiz"} </span>

      <span className="btn btn-sm btn-danger float-end" onClick={()=>removeTask(item.id)}>sil</span>
      <span className="btn btn-sm btn-warning float-end" onClick={()=>editTask(item.id)}>düzenle</span>
      </li>)}
    </ul>
    </div>
    </>
  )
}