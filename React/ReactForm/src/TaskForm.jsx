import {  useState } from "react"
import TaskList from "./TaskList"
import {v4 as uuidv4} from "uuid"
export default function TaskForm(){
  const emtyForm={
    task:"",
    priority:false
  }
  const [formData,setFormData]=useState(emtyForm)
  const [tasks,setTasks]=useState([])
  function handleInputChange(event){
    setFormData(prev=>{
      return {
        ...prev,
        [event.target.name]: event.target.type=="checkbox" ? event.target.checked:event.target.value
      }
    })
  }
  function removeTask(id){
    console.log(id)
    setTasks(prev=>prev.filter(item=>item.id!==id))

  }
  function editTask(id){
    const task=tasks.find(item=>item.id==id)
      console.log(task.priority)
      setFormData(task)
  }
  function handleFormSubmit(event){
    event.preventDefault()
    if(formData.task.length>3){
      formData.id=uuidv4()
      setTasks(prev=>[formData,...prev])
      setFormData(emtyForm)
      event.target.reset()
      
    }

     }
  return(
    <>
        <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask}/>
            <form onSubmit={handleFormSubmit}>
          <div className="row mb-3">
            <label htmlFor="Task" className="col-sm-2 col-form-label">Task</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="Task" name="task" onChange={handleInputChange}
              value={formData.task}/>
            </div>
          </div>
          
        
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="priority" name="priority" checked={formData.priority} onChange={handleInputChange}/>
                <label className="form-check-label" htmlFor="priority">
                  Öncelikli
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Kaydet</button>
        </form>
    </>
  )
}