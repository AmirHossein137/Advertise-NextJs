import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import UserAdvertise from "@/models/UserAdvertise";
import { hashPassword } from "@/utils/auth";

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

    const hashPass = await hashPassword(password);

    const NewUser = await UserAdvertise.create({
      email: email,
      password: hashPass,
    });

    console.log(NewUser);

    return NextResponse.json(
      { message: "The account was created successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "A problem has occurred on the server" },
      { status: 500 }
    );
  }
}
