import React from 'react'

const UpdateTodoForm = () => {
  return (
    <div>
        <form className='flex space-x-3'>
            <input type="text"
                className='shadow appearance-none border rounded'
                placeholder='Add todo'
            />
            <button
                type='submit'
                className='bg-zeus hover:bg-shadow text-cloud font-bold py-2 px-10 rounded focus:ouline-none focus:shadow-ouline'
            >
                Update
            </button>
        </form>
    </div>
  )
}

export default UpdateTodoForm