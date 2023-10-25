import React from 'react'
import image from '../assets/image.png'
import AboutCSS from './About.module.css'



function About() {
  return (
    <div className={AboutCSS.container} >
     
          <main >
               <img src={image} alt="" style={{backGroundSize:'cover',width:'100%',height:'233px'}}/>

              <div className='p-5 grid gap-10'>
               <h1 className='font-[700] text-[32px] '>Don’t squeeze in a sedan when you could relax in a van.</h1>
               <p> Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)</p>

           <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels. </p>
           <div className={AboutCSS.destination} >
            <p className='text-[24px] font-[700]'>Your destination is waiting.<br/>Your van is ready.</p>
            <button className={AboutCSS.btn}>Explore our vans</button>
           </div>
                </div> 

          </main>
       
    </div>
  )
}

export default About