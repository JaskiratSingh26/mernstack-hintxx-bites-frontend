import React, { useContext } from 'react'

import { Carousel } from "flowbite-react";
import Mycontext from '../contextStore/Mycontext';
function Slider() {

  let{search,setsearch}=useContext(Mycontext)
  return (
    <div className='  relative '>

      <div className="h-[90vh]  sm:h-[90vh] xl:h-[90vh] 2xl:h-[90vh]  "  >
        <Carousel indicators={false} slideInterval={1000}>

          <img src="/imgtwo.avif" alt="Image One" className="object-cover w-full h-full g-blend-lighten  brightness-50 " />
          <img src="/imgone.jpg" alt="Image One" className="object-cover w-full h-full g-blend-lighten  brightness-50 " />

          <img src="/imgthree.webp" alt="Image One" className="object-cover w-full h-full brightness-50" />

          <img src="/imgfour.jpg" alt="Image One" className="object-cover w-full h-full brightness-50" />

          <img src="/bgimg.jpg" alt="Image One" className="object-cover w-full h-full brightness-50" />

        </Carousel>
      </div>


      <div className='absolute bottom-5  py-5 px-4 w-full ' >
        <input type="text" placeholder='Serach..... ' className='   bg-transparent border-double  border-2 font-bold border-white text-white w-[65vh] max-sm:w-[35vh] '  value={search}  onChange={(e)=>{
          setsearch(e.target.value)
        }}  />
      
      </div>
    </div>
  )
}

export default Slider

