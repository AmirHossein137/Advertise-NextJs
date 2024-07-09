import AdvertiseCategories from "@/template/AdvertiseCategories";

const AdvertiseLayout = ({ children }) => {
  return (
    <div>
      <AdvertiseCategories>{children}</AdvertiseCategories>
    </div>
  );
};

export default AdvertiseLayout;
