import { useEffect, useState } from "react"

export default function TaskList({tasks,removeTask,editTask,finishTask}){

  const[priority,setPriority]=useState(false)
  const[filteredTasks,setFilteredTasks]=useState(tasks)

  useEffect(()=>{
    priority ? setFilteredTasks(tasks.filter(item=>item.priority==priority)):setFilteredTasks(tasks)
  },
    [tasks,priority])

  function handlePriorityFilter(){
    setPriority(prev=>!prev)
  }
  if(tasks.length===0){
    return(
      <>
      </>
    )
  }

  return(
    <>
    <div className="p-3 bg-ligth mb-5 border rounded" >

    <h4 >Görevler {!priority ? <span className="btn bt-sm btn-info float-end" onClick={handlePriorityFilter}>öncelikli tasklar</span>:<span className="btn bt-sm btn-primary float-end" onClick={handlePriorityFilter}>Tüm tasklar</span>}</h4>
    <ul className="list-group my-3  ">
      {filteredTasks.map((item,key)=>
      <li className={`list-group-item ${item.isDone?"bg-success":""}`} key={key}>{item.task}-<span>{item.priority?"öncelikli":"önceliksiz"} </span>

         <span className="btn btn-sm btn-success float-end" onClick={()=>finishTask(item.id)}>bitti</span>
      <span className="btn btn-sm btn-danger float-end" onClick={()=>removeTask(item.id)}>sil</span>
      <span className="btn btn-sm btn-warning float-end" onClick={()=>editTask(item.id)}>düzenle</span>
      </li>)}
    </ul>
    </div>
    </>
  )
}