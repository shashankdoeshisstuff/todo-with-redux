import React from 'react'
import AddTodoForm from './AddTodoForm'
import UpdateTodoForm from './UpdateTodoForm'

const Card = () => {
  return (
    <div className='w-1/2 h-3/4 min-h-max bg-kabul shadow-2x1 rounded-lg p-2 items-center flex flex-col space-y-10 justify-between'>
        <div className='flex flex-col space-y-10 w-full h-3/4 min-h-max items-center'>
            <h1 className='text-3x1 font-semibold text-cloud'>
                Todo List
            </h1>
            <div className='w-3/4'>
                <AddTodoForm/>
                <UpdateTodoForm/>
            </div>
        </div>
        <button className='bg-zeus hover:bg-shadow text-cloud font-bold py-2 px-10 rounded focus:ouline-none focus:shadow-ouline'>
            Clear
        </button>
    </div>
  )
}

export default Card