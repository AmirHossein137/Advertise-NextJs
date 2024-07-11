import { RadioGroup, Radio } from "@nextui-org/react";
import { categories } from "constans/data";

const RadioCategory = ({ formData, setFormData, data }) => {
  const categoryHandler = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, category: value });
  };

  return (
    <RadioGroup
      defaultValue={data ? data.category : ""}
      classNames={{ wrapper: "flex flex-row justify-start gap-5" }}
    >
      {categories.map((item, index) => (
        <Radio value={item} onChange={categoryHandler} key={index}>
          {item[0].toUpperCase() + item.slice(1)}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default RadioCategory;
