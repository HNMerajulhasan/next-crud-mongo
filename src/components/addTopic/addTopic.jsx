"use client"
import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AddTopic = () => {

  const router = useRouter();

  //Using Fetch(Where we need to clearly mention payload in body)
  // const handleSubmitForm = async (e) => {
  //   e.preventDefault()

  //    try{

  //      const formData= new FormData(e.currentTarget)
    
  //      const title = formData.get('title');
  //      const description = formData.get('description');
 
  //      if(!title || !description) {
  //       alert('Required')
  //       return
  //      }

  //      const response = await fetch(`http://localhost:3000/api/topics`, {

  //       method: 'POST',
  //       headers: {
  //         "content-type" : "application/json"
  //       },

  //       body: JSON.stringify({ //jodi axios use kri thle body mention kra lage na
  //         title,
  //         description
  //       })

  //      })

  //      response.status === 201 && window.alert('Success')

  //    }catch(err){

  //    }
  // }

   

  const handleSubmitTopic = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData(e.currentTarget);
      const title = formData.get('title');
      const description = formData.get('description');
  
      if (!title || !description) {
        alert('Required');
        return;
      }
  
      const response = await axios.post(`http://localhost:3000/api/topics`, {
        title,
        description,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if( response.status === 201){
        window.alert('Success Posted Your Topic');
        e.target.reset();
        router.push('/')
      }else{
        throw new Error('Failed to create a new topic')
      }
    } catch (err) {
      console.error('Error posting data', err);
    }

  };

  return (
    <div className='px-24 w-full'>
        <form onSubmit={handleSubmitTopic} className='w-full'>
            <div>
             <input
               className='border border-slate-500 w-full pl-2 py-1'
               placeholder='Topic Title'
               id='title'
               name='title'
           />
            </div>
          
            <div className='my-3'>
             <input
               className='border border-slate-500 w-full pl-2 py-1'
               placeholder='Topic Description'
               id='description'
               name='description'
           />
            </div>

            <div>
             
               <button type='submit' className='bg-cyan-700 text-[#fff] px-5 py-1'>Add Topic</button>
               
            </div>
        </form>
    </div>
  )
}

export default AddTopic