import React,{useState,useEffect} from 'react'
import Card from './Card'
import "../../server"





function Vans() {
    const url="/api/vans"
    const [vans,setVans]=useState([])

    
    
    useEffect(()=>{

        fetch(url)
        .then(res => res.json())
        .then(data => setVans(data.vans))

        // const fetchData=async()=>{
        //     try{
        //         const res=await fetch(url)
        //         if(!res.ok){
        //             throw new error('network res was not okay')
        //         }
        //         const data=await res.json()
        //         setVans(data)
                
        //     }catch(error){
        //         console.log(error)
        //     }
            
            
        
       
    },[])
    
    
    



  return (
    <div className='h-[1270px] w-[548px] m-auto bg-[#FFF7ED] relative'>
   
        <main className='p-[15px]'>
            <h1 className='font-[700] text-[32px] mb-2'>Explore our van options</h1>
            <div className='flex justify-between items-center'>
            <button className='bg-[#FFEAD0] text-[#4D4D4D] rounded-lg px-6 py-2'>Simple</button>
            <button className='bg-[#FFEAD0] text-[#4D4D4D] rounded-lg px-6 py-2'>Luxury</button>
            <button className='bg-[#FFEAD0] text-[#4D4D4D] rounded-lg px-6 py-2'>Rugged</button>
            <p>Clear filters</p>
            </div>
            <div className='flex flex-wrap gap-9  mt-20'>
            {
                vans.map((item,id)=>{
                    return <Card  {...item} key={id}/>
                })
            }
        

            </div>


        </main>
      
        
    </div>
  )
}

export default Vans