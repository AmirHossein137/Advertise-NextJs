import Card from "@/modules/Card";
import { CircleAlert } from 'lucide-react';

const MyAdvertisePage = ({ advertises }) => {
  return (
    <div>
      <div>
        {advertises.length ? null : (
          <div className="flex items-center gap-2 shadow p-6 bg-violet-400 rounded-lg">
            <CircleAlert className="text-white"/>
            <span className="text-white font-bold">The Advertise has not been Registeres</span>
          </div>

        )}
      </div>
      <div className="grid grid-cols-12 gap-4">
        {advertises.map((advertise) => (
          <Card
            key={advertise._id}
            data={JSON.parse(JSON.stringify(advertise))}
          />
        ))}
      </div>
    </div>
  );
};

export default MyAdvertisePage;
