import DeleteButton from '@/utils/button/deleteBtn/deleteButton'
import Link from 'next/link'
import React from 'react'


const TopicList = () => {
  return (
    <div className='px-28 py-3'>
       <div className='flex justify-between border border-indigo-500 p-3'>
          <div>
             <h2>Topic Title</h2>
             <h2>Topic Description</h2>
          </div>

          <div className='flex gap-2'>
             <DeleteButton/>
             <Link href={`/edit-topic/123`} className='bg-lime-500 px-5 py-2 rounded-lg'>
               Edit
             </Link>
             
          </div>
       </div>
    </div>
  )
}

export default TopicList