import Link from "next/link";
import { LayoutDashboard , CirclePower , Megaphone ,Save  } from "lucide-react";
import { Button } from "@nextui-org/react";

const DashboardLayoutPage = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-3">
        <div className="shadow flex flex-col gap-6 rounded-xl p-5">
          <Link
            href="/dashboard"
            className="flex items-center gap-1"
          >
            <LayoutDashboard width={18} className="text-gray-500"/>
            <span className="text-gray-600">Dashboard</span>
          </Link>
          <Link
            href="/dashboard/my-advertise"
            className="flex items-center gap-1"
          >
            <Megaphone width={18} className="text-gray-500"/>
            <span className="text-gray-600">My Advertise</span>
          </Link>
          <Link
            href="/dashboard/add-advertise"
            className="flex items-center gap-1"
          >
            <Save width={18} className="text-gray-500"/>
            <span className="text-gray-600">Record Advertise</span>
          </Link>
          <Button className="flex justify-start" color="danger">
            <CirclePower />
            <span>SignOut</span>
          </Button>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayoutPage;
