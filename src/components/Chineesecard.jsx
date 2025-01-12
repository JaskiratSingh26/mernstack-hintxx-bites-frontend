import React, { useContext } from 'react'
import Mycontext from '../contextStore/Mycontext'
import { useNavigate } from 'react-router-dom';

function Chineesecard() {
  let Navigate = useNavigate()
  let { items, search } = useContext(Mycontext)
  console.log(items)
  console.log(search, 'search')
  if (!Array.isArray(items) || items.length === 0 || !Array.isArray(items[0])) {
    return <div>No data available or data is not in the expected format.</div>;
  }

  return (
    <div>
      {
        search ? ('') :
          <h1 className='text-[3vh]  py-3 px-3 font-extrabold text-orange-300 drop-shadow-lg shadow-black ' >Chineese Food</h1>
      }

      <div className='flex overflow-x-auto whitespace-nowrap p-4'>
        {
          items ?
            items[0].filter((data) => (!search && data.category === 'chinese') || (search && data.name.toLowerCase().includes(search.toLowerCase()))
            ).map((data) => (
              <div>
                <div
                  key={data.id}
                  className="flex-shrink-0 w-48 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 mr-4"
                  onClick={() => {
                    Navigate(`/singlefood/${data._id}`)
                  }}
                >
                  <div className="p-2 space-y-2">
                    <h2 className="text-md font-semibold text-gray-800 tracking-tight">
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
              </div>
            )) : (
              <div>
                items not present
              </div>
            )
        }
      </div>
    </div>
  )
}

export default Chineesecard