import React from 'react'
import Slider from '../components/Slider'
import Indiancard from '../components/Indiancard'
import Chineesecard from '../components/Chineesecard'
import Desgin from '../components/Desgin'

function Home() {

const  user= JSON.parse(localStorage.getItem('user'));



  return (
    <div className='min-h-screen '>

      
      { user ?  (  <div className="">
        <Slider />
      </div>
):(
        
  <div>
    <Desgin/>
  </div>
      )
      
    }

    
      {/* <Desgin/> */}


      <div className='mt-3'>
      <Chineesecard/>
      </div>

      <div className='mt-3 '>
        <Indiancard/>
      </div>

     

    </div>
  )
}

export default Home
