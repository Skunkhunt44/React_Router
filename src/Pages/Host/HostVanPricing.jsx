import React from 'react'
import { useOutletContext } from 'react-router-dom';


function HostVanPricing() {
    const {currentVan}=useOutletContext();
  return (
    <div>
        <p className='text-[24px] font-[500] mt-5'>${currentVan.price}<span className='text-[16px] text-[#4D4D4D]'>/day</span> </p>
    </div>
  )
}

export default HostVanPricing