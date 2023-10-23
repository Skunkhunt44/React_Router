import React from 'react'

function Card(props) {
    const{imageUrl,name,type,price}=props
  return (
    <div className='h-[309px] w-[229px] '>
        <img src={imageUrl} alt="" className='w-[229px] rounded-lg  h-[229px]'/>
        <p className='flex justify-between font-[600]'>{name} <span>${price}/day</span></p>
        <button style={{width:'85px',padding:"5px",borderRadius:'5px'}} className={`van${type}`}>{type}</button>
    </div>
  )
}

export default Card