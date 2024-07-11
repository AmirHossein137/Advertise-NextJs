import MyAdvertisePage from "@/template/MyAdvertisePage";
import { CircleAlert } from "lucide-react";

const MyAdvertiseCard = ({ data }) => {
  return (
    <div>
      <div>
        {data.length ? null : (
          <div className="flex items-center gap-2 shadow p-6 bg-violet-400 rounded-lg">
            <CircleAlert className="text-white" />
            <span className="text-white font-bold">
              The Advertise has not been Registeres
            </span>
          </div>
        )}
      </div>
      <div className="grid grid-cols-12 gap-4">
        {data.map((item) => (
          <div className="col-span-6">
            <MyAdvertisePage
              key={item._id}
              data={JSON.parse(JSON.stringify(item))}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAdvertiseCard;
