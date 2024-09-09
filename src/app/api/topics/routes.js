import TopicList from "@/components/topicList/topicList";
import { dbConnect } from "@/lib/mongodb"
import { createTopic } from "@/queries/topicQuiries";
import { NextResponse } from "next/server";


export async function POST(request){

    const {title,description} = await request.json()

    await dbConnect();

    // await TopicList.create({title, description})

    const newTopic={
        title, 
        description
    }

    try{
      await createTopic(newTopic)
    }catch(e){
      return NextResponse(err.message,{
        status:500,
      })
    }

    return new NextResponse("User has been created", {
        status: 201,
      });

}