import { Button, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

const AdvertiseCard = ({
  item: { _id, title, description, price, country, category },
}) => {
  return (
    <Card>
      <CardBody>
        <div className="flex flex-col items-center justify-center gap-3 p-5">
          <p className="text-slate-950 font-medium">{title}</p>
          <span className="text-gray-500">{country}</span>
          <span className="text-gray-500">{category}</span>
          <span className="text-gray-500">${price}</span>
          <p className="text-justify line-clamp-4 text-sm text-gray-500">
            {description}
          </p>
          <Link
            className="w-full bg-green-600 text-white flex items-center justify-center p-2 rounded-lg"
            href={`/advertises/${_id}`}
          >
            More Details
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default AdvertiseCard;
