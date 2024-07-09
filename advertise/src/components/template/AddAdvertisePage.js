"use client";

import AdvertiseInput from "@/modules/AdvertiseInput";
import DetailsAdvertise from "@/modules/DetailsAdvertise";
import RadioCategory from "@/modules/RadioCategory";
import { useState } from "react";

const AddAdvertisePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    country: "",
    phone: "",
    price: "",
    constructionDate: new Date(),
    category: "",
    amenities: [],
    rules: [],
  });


  return (
    <div className="p-5">
      <span className="text-2xl text-gray-600 font-medium">
        Add Your Addvertise!...
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
      </div>
    </div>
  );
};

export default AddAdvertisePage;
