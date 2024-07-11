import React from 'react'
import AdvertiseCategories from './AdvertiseCategories'
import AdvertiseCard from '@/modules/AdvertiseCard'

const AdvertisesPage = ({data}) => {
  console.log(data)
  return (
    <div className='flex flex-col gap-7'>
      <div>
        <AdvertiseCategories data={data}/>
        <div className='grid grid-cols-12 gap-5'>
          {data.map((item) => (
            <div className='col-span-4'>
            <AdvertiseCard key={item._id} data={item}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdvertisesPage