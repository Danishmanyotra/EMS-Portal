import React from 'react'
import { useState,useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const CreateTask = () => {
  const [userData,setUserData] = useContext(AuthContext)
  const [taskTitle,setTaskTitle] =useState('')
  const [taskDescription,setTaskDescription]=useState('')
  const [taskDate,setTaskDate] = useState('')
  const [asignTo,setAsignTo]=useState('')
  const [category,setCategory]=useState('')

  const [newTask,setNewTask]=useState({})


  const submitHandler=(e) =>{    
e.preventDefault();
// console.log(taskTitle,taskDate,taskDescription);
const task={taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false};

const data = [...userData];
// console.log(data);


data.forEach((elem)=> {
  if(asignTo === elem.firstName){
    // console.log(elem.tasks);
    elem.tasks = [...elem.tasks,task];
    elem.taskCounts.newTask = elem.taskCounts.newTask+1;
    
  }
});
// localStorage.setItem('emloyees',JSON.stringify(data))
setUserData(data);

setTaskDate('');
setAsignTo('');
setCategory('');
setTaskDescription('');
setTaskTitle('');

 
  }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between'>
          <div className='w-1/2'>
            <div>
              <h3 className='text-xl text-gray-300 mb-0.5'>Task Title</h3>
              <input
              value={taskTitle}
                onChange={(e) =>{
                  setTaskTitle(e.target.value)
                }}
               className='text-xl py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder="Make a UI design" 
                
              />
            </div>

            <div>
              <h3 className='text-xl text-gray-300 mb-0.5'>Date</h3>
              <input
              value={taskDate}
                onChange={(e) =>{
                  setTaskDate(e.target.value)
                }}
              className='text-xl py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
            </div>

            <div>
              <h3 className='text-xl text-gray-300mb-0.5 '>Assign to </h3>
              <input
              value={asignTo}
                onChange={(e) =>{
                  setAsignTo(e.target.value)
                }}
              className='text-xl py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder="employee name"></input>
            </div>
            <div>
              <h3 className='text-xl text-gray-300 mb-0.5 '>Category</h3>
              <input
              value={category}
                onChange={(e) =>{
                  setCategory(e.target.value)
                }}

              className='text-xl py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'  type="text" placeholder="design,dev, etc" />
            </div>
          </div>

         
          <div className='w-2/5 flex flex-col'>
            <h3 className='text-xl text-gray-300 mb-0.5'>Description</h3>
            <textarea
            value={taskDescription}
                onChange={(e) =>{
                  setTaskDescription(e.target.value)
                }}
            className='w-full h-44 text-xl py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 '
              type="text"
              placeholder="Detailed description of task.(Max 500 word)"
              name=""
              id=""
              
            />
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-xl mt-4 w-full '>Create Task</button>
          </div>

         

          
        </form>
      </div>
  )
}

export default CreateTask
