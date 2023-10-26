import { useState ,useEffect} from "react"
import React from 'react'
import { Link } from "react-router-dom";
import "../../server"



function VansHost() {

    const [vanlist, setVanList] = useState([]);

    
    const url=
    
    // useEffect(() => {
    //     fetch("/api/host/vans")
    //         .then(res => res.json())
    //         .then(data => setVans(data.vans))
    // }, [])


    
    
    
    
    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVanList(data.vans))
               
    

}, [])
// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data); 
//         setVanList(data.van);
//         console.log(vanlist); 
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
//     fetchData();
//   }, []);


// const ListedVans=(props)=>{
// const {name,imageUrl,price}=props
//     return (
//         <div className="h-[560px] w-[548]">
//         <div className="w-[494px] h-[102] bg-white">
//             <img className="w-[65px] h-[65px]" src={imageUrl} alt="" />
//             <h1 className="font-[600] text-[20px] text-[#161616]">{name}</h1>
//             <p className="text-[16px] font-[500]">{price} <span>/day</span></p>

//         </div>
      
        

//         </div>
//     )
// }

const hostVansEls = vanlist?.map(van => (
    <Link
        to={`/host/vans/${van.id}`}
        key={van.id}
        
    >
        <div className="h-[150px] w-[548]">
        <div className="w-[494px] h-[102px] bg-[white] flex p-5 gap-4" key={van.id}>
            <div>
            <img src={van.imageUrl} className="w-[65px] h-[65px]" alt={`Photo of ${van.name}`} />
            </div>
            <div className="host-van-info">
                <h3 className="font-[600] text-20px text-[#161616]">{van.name}</h3>
                <p className="text-[16px] font-[500]">${van.price}/day</p>
            </div>
        </div>
        </div>
    </Link>
))

  return (
    <div className='w-548px bg-[#FFF7ED] font-[700] text-[32px] '>
       <h1 className="mt-5 mb-5">Your listed vans</h1>
      

<div className="host-vans-list">
                {
                    vanlist?.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>

    </div>
  )
}

export default VansHost