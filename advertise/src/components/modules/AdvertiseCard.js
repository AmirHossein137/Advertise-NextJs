import {Button, Card, CardBody} from "@nextui-org/react";
import Link from "next/link";

const AdvertiseCard = ({item : { title , description , price , country , category }}) => {
  return (
    <Card>
        <CardBody>
            <div className="flex flex-col items-center justify-center gap-3 p-5">
                <p className="text-slate-950 font-medium">{title}</p>
                <span className="text-gray-500">{country}</span>
                <span className="text-gray-500">{category}</span>
                <span className="text-gray-500">${price}</span>
                <p className="text-justify line-clamp-4 text-sm text-gray-500">{description}</p>
                <Button className="w-full text-white font-medium" color="success">
                    <Link href="/">More Details</Link>
                </Button>
            </div>
        </CardBody>
    </Card>
  )
}

export default AdvertiseCard