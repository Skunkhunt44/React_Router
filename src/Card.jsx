import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
    const{imageUrl,name,type,price,id}=props
  return (
    
    <div className='h-[309px] w-[229px] '>
        <Link to={`/vans/${id}`}>
        <img src={imageUrl} alt="" className='w-[229px] rounded-lg  h-[229px]'/>
        <p className='flex justify-between font-[600]'>{name} <span>${price}/day</span></p>
        <button style={{width:'85px',padding:"5px",borderRadius:'5px'}} className={`van${type}`}>{type}</button>
        </Link>
    </div>
  )
}

export default Card