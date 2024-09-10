import { dbConnect } from "@/lib/mongodb"
import topicModel from "@/models/topic";
// import { createTopic } from "@/queries/topicQuiries";
import { NextResponse } from "next/server";

//By using this function we are posting or creating any new topic into our database
export async function POST(request){

    const {title,description} = await request.json()

    await dbConnect();
 

    await topicModel.create({title,description})

  
    return new NextResponse("Topic Has been created", {
        status: 201,
      });

}

//By using this function we are getting/fetching all the posted/created topic from the database using find method
export async function GET(){
  await dbConnect()
  const AllTopics = await topicModel.find()
  return NextResponse.json({AllTopics})
}

export async function DELETE(request){

 const id = request.nextUrl.searchParams.get("id")
 await dbConnect();
 await topicModel.findByIdAndDelete(id)
 return NextResponse.json({message: "Topic has been deleted"}, {status: 200})
}