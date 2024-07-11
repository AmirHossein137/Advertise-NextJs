import Advertise from "@/models/Advertise";
import AdvertiseDetail from "@/modules/AdvertiseDetail";
import connectDB from "@/utils/connectDB";

const AdvertiseDetails = async ({ params: { advertiseId } }) => {
  await connectDB();
  const advertiseDetail = await Advertise.findOne({ _id: advertiseId });
  console.log(advertiseId)
  return (
    <div>
      <AdvertiseDetail data={advertiseDetail} />
    </div>
  );
};

export default AdvertiseDetails;
