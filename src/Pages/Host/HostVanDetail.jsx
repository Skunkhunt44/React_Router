import React, { useEffect, useState } from 'react'
import { Link,NavLink, Outlet, useParams,useOutletContext} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'



function HostVanDetail() {


  const [currentVan,setCurrentVan]=useState(null)
  const {id}=useParams()

useEffect(()=>{
  fetch(`/api/host/vans/${id}`)
    .then(res => res.json())
    .then(data => setCurrentVan(data.vans))

},[])



if(!currentVan){
  return <h1>Loading...</h1>
}



  return (
    <div className='w-[496px]'>
          <Link to='..'
          relative='path'
          >
          <p className='mt-7'><FontAwesomeIcon icon={faArrowLeftLong} /> Back to all vans</p>
          </Link>
          <div className='bg-[white] p-5 mt-7 '>
                  <div className='flex gap-3  '>
                      <div>
                      <img src={currentVan.imageUrl} className='w-[160px]' alt="" />
                      </div>
                      <div>
                      <button className={`van${currentVan.type}`} >{currentVan.type}</button>
                      <h1 className='font-[700] text-[27px]'>{currentVan.name}</h1>
                      <p className='font-[700] text-[19px]'>${currentVan.price}<span className='font-[500] text-[16px]'>/day</span></p>
                      </div>
                  </div>
                  <div className='mt-3'>
                    <nav>
                      <ul>
                        <NavLink end className={({isActive})=> isActive ? 'active-link': null} to='.'>
                          <li>Details</li>
                        </NavLink>
                        <NavLink  className={({isActive})=> isActive ? 'active-link': null} to='pricing'>
                          <li>Pricing</li>
                         </NavLink>
                        <NavLink className={({isActive})=> isActive ? 'active-link': null} to='photos'>
                          <li>Photo</li>
                        </NavLink>
                      </ul>
                    </nav>
                  </div>  
                <Outlet context={{currentVan}}/>
          </div>
    </div>
  )
}

export default HostVanDetail