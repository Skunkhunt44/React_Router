import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPhotos() {
    const {currentVan}=useOutletContext();
  return (
    <div className='mt-5'>
        <img className='w-[103px]' src={currentVan.imageUrl} alt="" />
    </div>
  )
}

export default HostVanPhotos