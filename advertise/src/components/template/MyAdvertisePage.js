"use client";

import CardAd from "@/modules/CardAd";
import { Card, CardBody, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const MyAdvertisePage = ({ data }) => {
  console.log(data);
  const router = useRouter();

  const editHandler = () => {
    router.push(`/dashboard/my-advertise/${data._id}`)
  }

  return (
    <div>
      <Card>
        <CardBody>
          <CardAd data={data} />
          <div className="flex items-center gap-1 mt-4">
            <div className="w-[50%]">
              <Button className="w-full" color="warning" onClick={editHandler}>
                Edit
              </Button>
            </div>
            <div className="w-[50%]">
              <Button className="w-full" color="danger">
                Delete
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default MyAdvertisePage;
