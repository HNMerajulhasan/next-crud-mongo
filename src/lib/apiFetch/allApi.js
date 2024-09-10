// export async function getAllTopics(){

//   try{
    
//     const res = await fetch('http://localhost:3000/api/topics',{
//         cache: "no-store",
//     })

//     if(!res.ok){
//         throw new Error("Failed To fetch the new Topic")
//     }

//     return res.json();

//   }catch(err){
//      console.error("Error loading Topic",err)
//   }

// }

//Fetching this api in order to show all the topics those are created or posted on database
import axios from 'axios';

export async function getAllTopics() {
  try {
    const res = await axios.get('http://localhost:3000/api/topics', {
      headers: {
        'Cache-Control': 'no-store',
      },
    });

    return res.data; // Axios response stores the data in `data` field.   Instead of res.json(), Axios automatically parses the response, and the data is available in res.data.
  } catch (err) {
    console.error("Error loading Topic", err);
    throw new Error("Failed to fetch the new Topic");
  }
}


//implementing this api for deleting

export async function fetchDeleteTopicApi(id){
  
           try{
             const res = await fetch(`http://localhost:3000/api/topics/?id=${id}`,{
            method:'DELETE'  
            })
            return res.json()

           }catch(err){
            throw new Error(err)
           }


}



export async function getEditingTopicById(id){

  try{
    
    const res = await axios.get(`http://localhost:3000/api/topics/${id}`,{
        headers: {
            'Cache-Control': 'no-store',
          },
    })

    return res.data;

  }catch(err){
    throw new Error(err)
  }


}