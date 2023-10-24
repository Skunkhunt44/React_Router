import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import "./server"


function VanDetail() {
    const params=useParams()
    const url=`/api/vans/${params.id}`
    const [van,setVan]=useState(null)


useEffect(()=>{
fetch(url)
.then(res=>res.json())
.then(data=>setVan(data.vans))
.catch((error) => console.error(error));
console.log(van)

},[params.id])


const Detail=({imageUrl,description,type,name,price})=>{


    return(
        <div>
            <img style={{width:'497px',height:"490px"}} className='mb-5' src={imageUrl} alt="" />
            <div className='flex flex-col  justify-evenly gap-5'>
            <button style={{width:'85px',padding:"5px",borderRadius:'5px'}} className={`van${type}`}>{type}</button>
            <h1 className='font-[700] text-[32px]'>{name}</h1>
            <p className='font-[500] text-[20]'><span className='font-[700] text-[24px]'>${price}</span>/day</p>
            <p className='text-[16px]'>{description}</p>
            <button className='bg-[#FF8C38] text-white w-[494px] h-[49px] rounded-md'>Rent this van</button>
            </div>
        </div>
    )
}



  return (
    <div className='h-[1259px] w-[548px] m-auto bg-[#FFF7ED] relative'>
        <header >
              <h1>
                <Link to='/'>#VANLIFE </Link>
              </h1>
              <nav>
                <ul>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>
                  <li>
                    <Link to='/vans'>Vans</Link>
                    </li>
                </ul>
              </nav>
        </header>
        <main className='p-5 '>
            <p><FontAwesomeIcon icon={faArrowLeftLong} /> Back to all vans</p>
            <div className='mt-6'>
            {van ? (
                <div>
                  <Detail {...van}/>    
                </div>
            ) : <h2>Loading...</h2>
        }
       
          
          
        
            </div>


        </main>
        <footer className='absolute bottom-0 w-full h-[70] ' >
        Ⓒ 2022 #VANLIFE
        </footer>
        

    </div>
  )
}

export default VanDetail