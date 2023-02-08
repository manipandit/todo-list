import { useState } from 'react';
import './App.css';
import Task from './Components/Task';

function App() {
  const [todoList,setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleInput = (e)=>{
    setNewTask(e.target.value)
  }

  const addTask = ()=>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName: newTask,
      completed: false,
    }
    const newTodoList = [...todoList,task];

    setTodoList(newTodoList)
  }

  const deleteTask = (id)=>{

    const newTodoList = todoList.filter((task)=>{
      // if(task === taskName)
      // {
      //   return false;
      // }
      // else return true;
      // or
      return task.id !== id
    })

    setTodoList(newTodoList)
  }

  const completeTask = (id)=>{
    console.log("clicked complete")
    setTodoList(
      todoList.map((task)=>{
        if(task.id === id)
        {
          return {...task, completed: true};
        }
        else 
        {
          return task;
        }
      })
    )
  }

  return (
    <div className="App">
    <h1>Todo - List your tasks</h1>
      <div className='at'>

      <div className='addTask'>
        <input onChange={handleInput} placeholder="Add New Task"/>
        <button onClick={addTask}> Add Task </button>
      </div>
      </div>
      <div className='list'>
        {todoList.map((task)=>{
          return (
            <Task 
            taskName={task.taskName} 
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
            />
          )
        })}
      </div>

    </div>
  );
}

export default App;
