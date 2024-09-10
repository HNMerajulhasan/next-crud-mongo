import EditTopicForm from '@/components/EditTopicForm/EditTopicForm'
import { getEditingTopicById } from '@/lib/apiFetch/allApi'
import React from 'react'

export default async function EditTopic({params: {id}}) {

  const{updatedTopic} = await getEditingTopicById(id)
  
 const{title,description}= updatedTopic;

  return (
    <div>
       <EditTopicForm id={id} title={title} description={description}/>
    </div>
  )
}
