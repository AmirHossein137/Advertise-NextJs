import AddAdvertisePage from "@/template/AddAdvertisePage"
import { useState } from "react"
const AddAdvertise = () => {
  const [formData , setFormData] = useState({
    title : "",
    description : "",
    country : "",
    phone : "",
    price : "",
    constructionDate : new Date,
    category : ""

  })
  return (
    <div className="p-5">
      <span className="text-2xl text-gray-600 font-medium mb-4">Add Your Addvertise!...</span>
      <div>

      </div>
    </div>
  )
}

export default AddAdvertise