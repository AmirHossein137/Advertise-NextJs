import React from "react";
import AdvertisesPage from "@/template/AdvertisesPage";

const Advertises = async ({ searchParams }) => {
  const res = await fetch("http://localhost:3000/api/advertise", {
    cache: "no-store",
  });
  const result = await res.json();
  let Data = result.data;
  if (searchParams.category) {
    Data = Data.filter((i) => i.category === searchParams.category);
  }
  return (
    <div>
      <AdvertisesPage data={Data} />
    </div>
  );
};

export default Advertises;
