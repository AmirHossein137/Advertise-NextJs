import { Input } from "@nextui-org/react";

const AdvertiseInput = ({ formData, setFormData, label, name }) => {
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <Input
      type="text"
      value={formData[name]}
      label={label}
      name={name}
      onChange={inputHandler}
    />
  );
};

export default AdvertiseInput;
