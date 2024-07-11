"use client";

import CardAd from "@/modules/CardAd";
import { Card, CardBody, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

const MyAdvertisePage = ({ data }) => {
  const router = useRouter();

  const editHandler = () => {
    router.push(`/dashboard/my-advertise/${data._id}`);
  };

  const deleteHandler = async () => {
    const res = await fetch(`/api/advertise/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    console.log(result)
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };

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
              <Button className="w-full" color="danger" onClick={deleteHandler}>
                Delete
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
      <Toaster />
    </div>
  );
};

export default MyAdvertisePage;
