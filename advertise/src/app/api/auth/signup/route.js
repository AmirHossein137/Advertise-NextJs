import { NextResponse } from "next/server";
import connectDB from "../../../../../utils/connectDB";
import UserAdvertise from "../../../../../models/UserAdvertise";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    if ((!email, !password)) {
      return NextResponse.json(
        { error: "Please enter valid information" },
        { status: 422 }
      );
    }
    const existUser = await UserAdvertise.findOne({ email });
    if (existUser) {
      return NextResponse.json(
        { error: "This account exists" },
        { status: 422 }
      );
    }
  } catch (err) {
    console.log(err);
  }
}
