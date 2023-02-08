import React from 'react'
import "./Task.css"

const Task = (props) => {
    
  return (
   <div className="taskC">
     <div className='task'
     style={{ backgroundColor: props.completed ? "#3e515161" : "#decba452"}}
     >
        <h1>{props.taskName}</h1>
        <button onClick={()=>props.completeTask(props.id)}> Complete </button>
        {/* when function has a parameter then it shd not be directly called instead callback has to be used to call such fns as below */}
        <button onClick={()=>props.deleteTask(props.id)} >Remove</button>

       
    </div>
   </div>
  )
}

export default Task