import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UserAdvertise from "@/models/UserAdvertise";
import MyAdvertisePage from "@/template/MyAdvertisePage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

const MyAdvertise = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  const [user] = await UserAdvertise.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "advertises",
        foreignField: "userId",
        localField: "_id",
        as: "advertises",
      },
    },
  ]);
  console.log(user)
  return (
    <div>
      <MyAdvertisePage advertises={user.advertises}/>
    </div>
  );
};

export default MyAdvertise;
