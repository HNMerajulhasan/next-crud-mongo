import { dbConnect } from "@/lib/mongodb";
import topicModel from "@/models/topic";
import { NextResponse } from "next/server";


export async function PUT(request, {params :{id}}){
    // const{id}=params;
    const{newTitle:title, newDescription: description} = await request.json();
    await dbConnect();
    
    await topicModel.findByIdAndUpdate(id, {title,description})
 
    return NextResponse.json({message: "Yeap! The Topic has been updated Successfully"}, {status: 200})

}


//this function is for to get any single topic by its id for update
export async function GET(request , {params : {id}}){

  await dbConnect();

  const updatedTopic = await topicModel.findOne({_id:id})
  return NextResponse.json({updatedTopic}, {status: 200})


}