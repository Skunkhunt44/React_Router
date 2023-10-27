import React from 'react'
import { useOutletContext } from 'react-router-dom'


function HostVanInfo() {



    const {currentVan}=useOutletContext();

  return (
    <div className='mt-5 grid gap-3'>
        <h1 className='font-[700] text-[14px]'>Name: <span className='font-[500]'>{currentVan.name} </span> </h1>
        <h1 className='font-[700] text-[14px]'>Category: <span className='font-[500]'> {currentVan.type} </span></h1>
        <h1 className='font-[700] text-[14px]'>Description: <span className='font-[500]'>  {currentVan.description}</span></h1>
        <h1 className='font-[700] text-[14px]'>Visibility:<span className='font-[500]'>public</span></h1>
    </div>
  )
}

export default HostVanInfo