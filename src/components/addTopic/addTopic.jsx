import React from 'react'

const AddTopic = () => {
  return (
    <div className='px-24 w-full'>
        <form className='w-full'>
            <div>
             <input
               className='border border-slate-500 w-full pl-2 py-1'
             placeholder='Topic Title'
           />
            </div>
          
            <div className='my-3'>
             <input
               className='border border-slate-500 w-full pl-2 py-1'
             placeholder='Topic Description'
           />
            </div>

            <div>
             
               <button className='bg-cyan-700 text-[#fff] px-5 py-1'>Add Topic</button>
               
            </div>
        </form>
    </div>
  )
}

export default AddTopic