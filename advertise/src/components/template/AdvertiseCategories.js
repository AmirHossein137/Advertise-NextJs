import { categories } from "constans/data";
import {
  Car,
  Laptop,
  Smartphone,
  TabletSmartphone,
  Footprints,
  GalleryVerticalEnd
} from "lucide-react";
import Link from "next/link";


const AdvertiseCategories = ({ children }) => {
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
        <Link href={'/'} className="flex items-center gap-1">
            <GalleryVerticalEnd className="text-violet-400"/>
            <span className="text-lg text-violet-600 font-medium">All</span>
        </Link>
        {categories.map((category, index) => (
          <Link className="flex items-center gap-1" href={'/'}>
            <div className="text-violet-400">{icons[category]}</div>
            <p key={index} className="text-lg text-violet-600 font-medium">{category}</p>
          </Link>
        ))}
      </div>
      <div>{children}</div>
    </>
  );
};

export default AdvertiseCategories;
