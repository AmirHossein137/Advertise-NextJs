import Advertise from "@/models/Advertise";
import AddAdvertisePage from "@/template/AddAdvertisePage";

import connectDB from "@/utils/connectDB";

const editAdvertise = async ({ params: { advertiseId } }) => {
  await connectDB();
  const advertise = await Advertise.findOne({ _id: advertiseId });

  return (
    <div>
      <AddAdvertisePage data={JSON.parse(JSON.stringify(advertise))} />
    </div>
  );
};

export default editAdvertise;
