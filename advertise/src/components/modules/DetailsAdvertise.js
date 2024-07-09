import { Button, Input } from "@nextui-org/react";
import { Plus, Trash } from "lucide-react";

const DetailsAdvertise = ({ formData, setFormData, detail, title }) => {
  const detailAdder = () => {
    setFormData({ ...formData, [detail]: [...formData[detail], ""] });
  };

  const detailHandler = (e, index) => {
    const { value } = e.target;
    const listItem = [...formData[detail]];
    listItem[index] = value;
    setFormData({ ...formData, [detail]: listItem });
  };

  const deteleHandler = (index) => {
    const list = [...formData[detail]];
    list.splice(index, 1);
    setFormData({ ...formData, [detail]: list });
  };

  return (
    <div className="flex flex-col gap-4 mt-5">
      <span className="font-medium text-gray-500">{title}</span>
      {formData[detail]?.map((data, index) => (
        <div key={index} className="flex items-center gap-2">
          <Input
            value={data}
            label={title}
            type="text"
            variant="faded"
            placeholder={`write Your ${detail}`}
            onChange={(e) => detailHandler(e, index)}
          />
          <Button size="lg" color="danger" onclick={() => deteleHandler(index)}>
            Delete
          </Button>
        </div>
      ))}
      <Button onClick={detailAdder} color="secondary">
        <Plus />
        <span>Add</span>
      </Button>
    </div>
  );
};

export default DetailsAdvertise;
