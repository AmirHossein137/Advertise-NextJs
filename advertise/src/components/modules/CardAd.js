import { LocateFixed } from "lucide-react";

const CardAd = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <p className="font-medium text-slate-950">{data.title}</p>
      <div className="flex items-center gap-2">
        <LocateFixed className="text-gray-500" width={17} />
        <span className="text-gray-500">{data.country}</span>
      </div>
      <div className="flex items-center">
        <span className="text-gray-500">${data.price}</span>
      </div>
      <div>
        <span className="text-gray-500">{data.category}</span>
      </div>
    </div>
  );
};

export default CardAd;
