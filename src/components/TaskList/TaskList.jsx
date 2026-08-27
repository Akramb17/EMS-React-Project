import React from 'react'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id='TaskList' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 m-10'>
    
    {data.tasks.map((elem, idx) => {

      if(elem.active){
        return <AcceptTask key={idx} data={elem} />
      }

      if(elem.newTask){
        return <NewTask key={idx} data={elem} />
      }

      if(elem.completed){
        return <CompleteTask key={idx} data={elem} />
      }

      if(elem.failed){
        return <FailedTask key={idx} data={elem} />
      }
    })}


    </div>
  )
}

export default TaskList


