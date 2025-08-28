import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {

    // console.log(data);
  return (

    <div id='tasklist' className=' flex items-center justify-start gap-5 flex-nowrap h-[45%] w-full  mt-10 py-5 overflow-x-auto'>
     {
        data.tasks.map((elem,idx)=>{
           
           if(elem.active) {
            return <AcceptTask key={idx} data={elem}/>
           }
           if(elem.newTask) {
            return <NewTask key={idx} data={elem}/>
           }
           if(elem.completed) {
            return <CompleteTask key={idx} data={elem}/>
           }
           if(elem.failed) {
            return <FailedTask key={idx} data={elem}/>
           }
        })
     }

      {/* <div className='flex-shrink-0 h-full w-[350px] bg-green-400 rounded-xl p-5'>
        <div className='flex justify-between items-center pt-4'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm font-bold '>19 aug 2025</h4>
        </div>
        <h2 className='mt-5 text-3xl font-semibold '>Make a youtube video</h2>
        <p className='text-base mt-2'>
        Lorem ipsum sit amet consecteetur adipisicing elit. Dolorbus ulliam libero quisqua. Ea vite etc.
        </p>
      </div>

      <div className='flex-shrink-0 h-full w-[350px] bg-yellow-400 rounded-xl p-5'>
        <div className='flex justify-between items-center pt-4'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm font-bold '>19 aug 2025</h4>
        </div>
        <h2 className='mt-5 text-3xl font-semibold '>Make a youtube video</h2>
        <p className='text-base mt-2'>
        Lorem ipsum sit amet consecteetur adipisicing elit. Dolorbus ulliam libero quisqua. Ea vite etc.
        </p>
      </div>

      <div className='flex-shrink-0 h-full w-[350px] bg-blue-400 rounded-xl p-5'>
        <div className='flex justify-between items-center pt-4'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm font-bold '>19 aug 2025</h4>
        </div>
        <h2 className='mt-5 text-3xl font-semibold '>Make a youtube video</h2>
        <p className='text-base mt-2'>
        Lorem ipsum sit amet consecteetur adipisicing elit. Dolorbus ulliam libero quisqua. Ea vite etc.
        </p>
      </div>

      <div className='flex-shrink-0 h-full w-[350px] bg-red-400 rounded-xl p-5'>
        <div className='flex justify-between items-center pt-4'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm font-bold '>19 aug 2025</h4>
        </div>
        <h2 className='mt-5 text-3xl font-semibold '>Make a youtube video</h2>
        <p className='text-base mt-2'>
        Lorem ipsum sit amet consecteetur adipisicing elit. Dolorbus ulliam libero quisqua. Ea vite etc.
        </p>
      </div>

      <div className='flex-shrink-0 h-full w-[350px] bg-green-400 rounded-xl p-5'>
        <div className='flex justify-between items-center pt-4'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm font-bold '>19 aug 2025</h4>
        </div>
        <h2 className='mt-5 text-3xl font-semibold '>Make a youtube video</h2>
        <p className='text-base mt-2'>
        Lorem ipsum sit amet consecteetur adipisicing elit. Dolorbus ulliam libero quisqua. Ea vite etc.
        </p>
      </div>

      <div className='flex-shrink-0 h-full w-[350px] bg-yellow-400 rounded-xl p-5'>
        <div className='flex justify-between items-center pt-4'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm font-bold '>19 aug 2025</h4>
        </div>
        <h2 className='mt-5 text-3xl font-semibold '>Make a youtube video</h2>
        <p className='text-base mt-2'>
        Lorem ipsum sit amet consecteetur adipisicing elit. Dolorbus ulliam libero quisqua. Ea vite etc.
        </p>
      </div> */}

    </div>
     
  )
}

export default TaskList
