"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const EditTopicForm = ({ id, title, description }) => {

  const router = useRouter();

  const handleUpdateTopic = async (e) => {
    e.preventDefault();

    try {
      // Get form data using FormData API
      const formData = new FormData(e.currentTarget);

      const newTitle = formData.get('title'); // Fetch value by input name 'title'
      const newDescription = formData.get('description'); // Fetch value by input name 'description'

      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
           newTitle,
           newDescription
        })
      });

      if (!res.ok) {
        throw new Error('Failed to update the Topic');
      } else {
        router.push('/');
        router.refresh();
      }

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='px-24 w-full'>
      <form onSubmit={handleUpdateTopic} className='w-full'>
        <div>
          <input
            name='title' // Set name for FormData retrieval
            defaultValue={title} // Use defaultValue to display the initial value
            className='border border-slate-500 w-full pl-2 py-1'
            placeholder='Update Topic Title'
          />
        </div>

        <div className='my-3'>
          <input
            name='description' // Set name for FormData retrieval
            defaultValue={description} // Use defaultValue to display the initial value
            className='border border-slate-500 w-full pl-2 py-1'
            placeholder='Update Topic Description'
          />
        </div>

        <div>
          <button type='submit' className='bg-cyan-700 text-[#fff] px-5 py-1'>
            Update Topic
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditTopicForm
