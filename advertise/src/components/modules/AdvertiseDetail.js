const AdvertiseDetail = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-slate-950 font-medium">Advertise Name :</span>
        <span className="text-gray-500 text-sm">{data.title}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-slate-950 font-medium">Country :</span>
        <span className="text-gray-500 text-sm">{data.country}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-slate-950 font-medium">Phone :</span>
        <span className="text-gray-500 text-sm">{data.phone}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-slate-950 font-medium">Price :</span>
        <span className="text-gray-500 text-sm">${data.price}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-slate-950 font-medium">Category :</span>
        <span className="text-gray-500 text-sm">{data.category}</span>
      </div>
      {data.amenities.length ? (
        <div className="flex flex-col gap-2 border-b border-gray-100 pb-3">
          <span className="text-slate-950 font-medium">Amenities :</span>
          {data.amenities?.map((item) => (
            <p className="text-gray-500 text-sm">{item}</p>
          ))}
        </div>
      ) : (
        ""
      )}

      {data.rules.length ? (
        <div className="flex flex-col gap-2 border-b border-gray-100 pb-3">
          <span className="text-slate-950 font-medium">Rules :</span>
          {data.rules?.map((item) => (
            <p className="text-gray-500 text-sm">{item}</p>
          ))}
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-col gap-2">
        <span className="text-slate-950 font-medium">Description :</span>
        <p className="text-justify text-gray-500 text-sm">{data.description}</p>
      </div>
    </div>
  );
};

export default AdvertiseDetail;
