import Advertise from "@/models/Advertise";
import connectDB from "@/utils/connectDB"
import { NextResponse } from "next/server";

export async function GET(context){
    try{
        await connectDB();
        const id = context.params.detailsId;
        const advertiseDetail = await Advertise.findOne({ _id : id })
        return NextResponse.json(
            {data : advertiseDetail},
            {status : 200}
        )
    } catch(err){
        console.log(err)
        return NextResponse.json(
            { error: "A problem has occurred on the server" },
            { status: 500 }
          );
    }
}