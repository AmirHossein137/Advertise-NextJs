import { categories } from "constans/data";
import {
  Car,
  Laptop,
  Smartphone,
  TabletSmartphone,
  Footprints,
  GalleryVerticalEnd,
} from "lucide-react";
import Link from "next/link";

const AdvertiseCategories = () => {
  const icons = {
    car: <Car />,
    mobile: <Smartphone />,
    laptop: <Laptop />,
    tablet: <TabletSmartphone />,
    shoes: <Footprints />,
  };

  return (
    <>
      <div className="flex items-center gap-9 border-b border-gray-200 pb-3 mb-6">
        <Link href={"/advertises"} className="flex items-center gap-1">
          <GalleryVerticalEnd className="text-violet-400" />
          <span className="text-lg text-violet-600 font-medium">All</span>
        </Link>
        {categories.map((cat, index) => (
          <Link
            className="flex items-center gap-1"
            href={{ pathname: "/advertises", query: { category: cat } }}
          >
            <div className="text-violet-400">{icons[cat]}</div>
            <p key={index} className="text-lg text-violet-600 font-medium">
              {cat}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AdvertiseCategories;
