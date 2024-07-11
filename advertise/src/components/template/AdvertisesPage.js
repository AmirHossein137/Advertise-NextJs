import React from "react";
import AdvertiseCategories from "./AdvertiseCategories";
import AdvertiseCard from "@/modules/AdvertiseCard";
import Link from "next/link";

const AdvertisesPage = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col gap-7">
      <div>
        <AdvertiseCategories data={data} />
        <div className="grid grid-cols-12 gap-5">
          {data?.map((item) => (
            <Link key={item._id} href={`/advertises/${item._id}`} className="col-span-4">
              <AdvertiseCard item={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertisesPage;
