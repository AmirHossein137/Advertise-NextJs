import Advertise from "@/models/Advertise";
import UserAdvertise from "@/models/UserAdvertise";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

export async function POST(req) {
  try {
    await connectDB();

    const {
      title,
      description,
      country,
      phone,
      price,
      category,
      amenities,
      rules,
    } = await req.json();

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "Please login to your account" },
        { status: 401 }
      );
    }

    const user = await UserAdvertise.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ error: "Account not found" }, { status: 404 });
    }

    if (
      !title ||
      !description ||
      !country ||
      !phone ||
      !price ||
      !category ||
      !amenities ||
      !rules
    ) {
      return NextResponse.json(
        { error: "Please enter valid information" },
        { status: 400 }
      );
    }

    const newAdvertise = await Advertise.create({
      title,
      description,
      country,
      phone,
      price : +price,
      category,
      amenities,
      rules,
      userId: new Types.ObjectId(user._id),
    });

    console.log(newAdvertise);

    return NextResponse.json(
      { message: "New Advertise Added" },
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
