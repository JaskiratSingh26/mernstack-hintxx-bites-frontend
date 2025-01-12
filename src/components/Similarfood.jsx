import React, { useContext } from 'react'
import Mycontext from '../contextStore/Mycontext'

import { useNavigate } from 'react-router-dom'
function Similarfood({ type }) {
    console.log(type, 'simlar produst type')

    let Navigate=useNavigate()
    let { items } = useContext(Mycontext)
    console.log('simlar ', items)


  
    return (
        <div>
            <h1 className='text-[3vh]  py-3 px-3 font-extrabold text-orange-300 drop-shadow-lg shadow-black ' >{type} Items</h1>`

  
            <div className='flex overflow-x-auto whitespace-nowrap p-4'>
    


    

        
        
        
            {items[0]
                    .filter((data) => data.type === type) // Filter items based on type
                    .map((data, index) => ( // Map the filtered items
                        <div
      
                        key={data.id}
                        className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 mr-4" 
                        onClick={()=>{
                          Navigate(`/singlefood/${data._id}`)
                        }}
                        >
                        <div className="p-4 space-y-2">
                          <h2 className="text-lg font-semibold text-gray-800 tracking-tight">
                            {data.name}
                          </h2>
                          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                            <img
                              src={data.image}
                              alt={data.name}
                              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                              />
                          </div>
                        </div>
                      </div>
                    ))}
        

            </div>


        </div>
    )
}

export default Similarfood
