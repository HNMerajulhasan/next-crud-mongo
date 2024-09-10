"use client"
import { getAllTopics } from '@/lib/apiFetch/allApi';
import DeleteButton from '@/utils/button/deleteBtn/deleteButton'
import Link from 'next/link'
import React from 'react'


// const  getTopics = async () => {

//    try{
     
//      const res = await fetch('http://localhost:3000/api/topics',{
//          cache: "no-store",
//      });
 
//     console.log(res)

//      if(!res.ok){
//          throw new Error("Failed To fetch the new Topic")
//      }
 
//      return res.json();
 
//    }catch(err){
//       console.error("Error loading Topic",err)
//    }
 
//  }

export default async function TopicList() {

   const {AllTopics} = await getAllTopics();

  return (
   <div>
     {AllTopics?.map(topics => (
         <div key={topics._id} className='px-28 py-3'>
         <div className='flex justify-between border border-indigo-500 p-3'>
            <div>
               <h2>{topics.title} </h2>
               <h2>{topics.description}</h2>
            </div>
  
            <div className='flex gap-2'>
               <DeleteButton id={topics._id} />
               <Link href={`/edit-topic/${topics._id}`} className='bg-lime-500 px-5 py-2 rounded-lg'>
                 Edit
               </Link>
               
            </div>
         </div>
      </div>
    ))}
 
   </div>
  )
}

