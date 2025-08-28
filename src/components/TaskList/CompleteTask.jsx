import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[350px] bg-yellow-400 rounded-xl p-5'>
        <div className='flex justify-between items-center pt-4'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
            <h4 className='text-sm font-bold '>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-3xl font-semibold '>{data.taskTitle}</h2>
        <p className='text-base mt-2'>
{data.taskDescription}        </p>
        <div className='mt-2'>
           <button className='w-full bg-green-500 rounded p-1'>Complete</button>
        </div>
      </div>
  )
}

export default CompleteTask
