import React from 'react';
import { useNavigate } from 'react-router-dom';
const FoodDeliveryWebsite = () => {
  let navigate=useNavigate()
  return (
    <div className="  text-white font-sans min-h-screen flex flex-col">
    
      <section className="flex-grow flex flex-col md:flex-row items-center p-8 md:p-16 " 
      
      style={{
        // backgroundImage: `url('/bgimg.jpg')`, // Replace with your image URL
        backgroundImage:`url('https://wallpaperaccess.com/full/1312802.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}


      >
        <div className=" ml-5 md:w-1/2 text-center  md:text-white md:text-left sm:w-2/2  sm:text-left   ">
          <h1 className ="text-4xl md:text-5xl font-bold mb-4  sm:mt-[32vh] sm:text-left max-sm:mt-[40vh] max-sm:text-left max-sm:p-0 max-sm:m-0 ">Craving something delicious?</h1>
          <p className="text-lg mb-8 max-sm:text-left max-sm:p-0 max-sm:m-0  max-sm:mt-[3vh] max-sm:w-[40vh] sm:w-[50vh] ">Get the best food in town delivered to you quickly and easily with "Hint/xx Bites"</p>
          <div className="flex  md:justify-start space-x-4 sm:block  max-sm:mt-4 max-sm:w-[25vh] ">
            <button className="  max-sm:bg-orange-500 max-sm:text-black bg-orange-500 hover:bg-orange-600 text-white py-3 px-5  rounded" onClick={(e)=>{
              navigate('/Login')

            }} > Order Food</button>
           
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default FoodDeliveryWebsite;
       