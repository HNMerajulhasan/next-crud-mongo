import topicModel from "@/models/topic";


export async function createTopic({topic}){

   try{
     await topicModel.create(topic)
   }catch(err){
     throw new Error(err);
   }

}