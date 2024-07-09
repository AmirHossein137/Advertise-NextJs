import { ThreeDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="50"
      color="#fff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: "auto" }}
    />
  );
};

export default Loader;
