"use client";

import AdvertiseInput from "@/modules/AdvertiseInput";
import DetailsAdvertise from "@/modules/DetailsAdvertise";
import Loader from "@/modules/Loader";
import RadioCategory from "@/modules/RadioCategory";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddAdvertisePage = ({ data }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    country: "",
    phone: "",
    price: "",
    category: "",
    amenities: [],
    rules: [],
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const saveHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/advertise", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    setLoading(false);
    const result = await res.json();
    console.log(result);
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  const editHandler = async () => {
    setLoading(true)
    const res = await fetch('/api/advertise' , {
      method : "PATCH",
      body : JSON.stringify(formData),
      headers : { "Content-Type" : "application/json" }
    })
    setLoading(false)
    const result = await res.json()
    if(result.error){
      toast.error(result.error)
    } else {
      toast.success(result.message)
      router.push('/dashboard/my-advertise')
      router.refresh()
    }
  }

  useEffect(() => {
    setFormData(data);
  }, []);

  return (
    <div className="p-5">
      <span className="text-2xl text-gray-600 font-medium">
        {data ? "Edit Your Addvertise!..." : "Add Your Addvertise!..."}
      </span>
      <div className="grid grid-cols-12 gap-4 mt-6">
        <div className="col-span-6">
          <AdvertiseInput
            formData={formData}
            setFormData={setFormData}
            label="Title"
            name="title"
          />
        </div>
        <div className="col-span-6">
          <AdvertiseInput
            formData={formData}
            setFormData={setFormData}
            label="Phone"
            name="phone"
          />
        </div>
        <div className="col-span-6">
          <AdvertiseInput
            formData={formData}
            setFormData={setFormData}
            label="Country"
            name="country"
          />
        </div>
        <div className="col-span-6">
          <AdvertiseInput
            formData={formData}
            setFormData={setFormData}
            label="Price"
            name="price"
          />
        </div>
        <div className="col-span-12">
          <div className="flex flex-col gap-3">
            <span className="font-medium text-gray-600">Categories :</span>
            <RadioCategory formData={formData} setFormData={setFormData} />
          </div>
        </div>
        <div className="col-span-6">
          <DetailsAdvertise
            formData={formData}
            setFormData={setFormData}
            detail="amenities"
            title="Amenities"
          />
        </div>
        <div className="col-span-6">
          <DetailsAdvertise
            formData={formData}
            setFormData={setFormData}
            detail="rules"
            title="Rules"
          />
        </div>
        <div className="col-span-12">
          <AdvertiseInput
            formData={formData}
            setFormData={setFormData}
            label="Description"
            name="description"
          />
        </div>
        <div className="col-span-12">
          {data ? (
            <Button
              size="lg"
              className="w-full text-white font-bold"
              color="success"
              onClick={editHandler}
            >
              {loading ? <Loader /> : "Edit Your Advertise"}
            </Button>
          ) : (
            <Button
              size="lg"
              className="w-full text-white font-bold"
              color="success"
              onClick={saveHandler}
            >
              {loading ? <Loader /> : "Add Your Advertise"}
            </Button>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AddAdvertisePage;
