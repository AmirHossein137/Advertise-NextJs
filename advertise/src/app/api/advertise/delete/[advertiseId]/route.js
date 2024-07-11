import Advertise from "@/models/Advertise";
import UserAdvertise from "@/models/UserAdvertise";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    await connectDB();
    const id = context.params.advertiseId;
    console.log(id);
    const session = await getServerSession(req);
    console.log(session)
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

    const advertise = await Advertise.findOne({ _id: id });

    if (!user._id.equals(advertise.userId)) {
      return NextResponse.json(
        { error: "Your access to this Advertise is restricted" },
        { status: 403 }
      );
    }

    await Advertise.deleteOne({ _id: id });

    return NextResponse.json({ message: "Advertise Deleted" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "A problem has occurred on the server" },
      { status: 500 }
    );
  }
}
