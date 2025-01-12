import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Mycontext from '../contextStore/Mycontext';

function Indiancard() {
  const { items } = useContext(Mycontext);
  let Navigate = useNavigate();

  // Check if items is an array and has data
  if (!Array.isArray(items) || items.length === 0 || !Array.isArray(items[0])) {
    return <div>No data available or data is not in the expected format.</div>;
  }

  return (
    <div>
      <h1 className='text-[2.5vh] py-2 px-2 font-extrabold text-orange-300 drop-shadow-lg shadow-black'>
        Indian Food
      </h1>

      <div className="flex overflow-x-auto whitespace-nowrap p-2">
        {items[0]
          .filter((data) => data.category === 'indian') // Filter items by category
          .map((data) => (
            <div
              key={data.id}
              className="flex-shrink-0 w-48 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 mr-3"
              onClick={() => {
                Navigate(`/singlefood/${data._id}`);
              }}
            >
              <div className="p-2 space-y-1">
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
          ))}
      </div>
    </div>
  );
}

export default Indiancard;