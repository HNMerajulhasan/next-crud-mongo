
import { fetchDeleteTopicApi } from '@/lib/apiFetch/allApi'
import React from 'react'

const DeleteButton = ({id}) => {

  const handleDeleteTopic = async (e) => {
    e.preventDefault(); // Prevent any unwanted form submission
    
    try {
      const isConfirmed = window.confirm('Are you sure?'); // Explicitly calling window.confirm

      if (isConfirmed) {
        await fetchDeleteTopicApi(id);
      }
    } catch (error) {
      console.error("Error deleting the topic:", error);
    }
  }

  return (
    <div className=''>
      <button onClick={handleDeleteTopic} className='px-5 rounded-lg py-2'> 
        Delete
     </button>  
    </div>
  )
}

export default DeleteButton