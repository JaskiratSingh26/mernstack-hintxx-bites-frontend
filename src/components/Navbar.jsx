// import React, { useState } from 'react';
// import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi';
// import './Navbar.css';
// import { LuPizza } from "react-icons/lu";



// import { Link } from "react-router";
// const Navbar = () => {

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [showAuthOptions, setShowAuthOptions] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleAuthOptions = () => {
//     setShowAuthOptions(!showAuthOptions);
//   };

//   return (
//     <nav className="navbar z-10 h-20   ">
//       <div className="navbar-container">
//         <div className='flex  justify-center items-center '>

//           <LuPizza />

//           <div className="navbar-logo ">


//             <Link to="/"  className='text-black'>Hint/xx Bites</Link>
//           </div>
//         </div>
//         <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
//           <Link to="/" onClick={() => {
//             setIsMobileMenuOpen(false)


//           }}>Home</Link>
//           <Link to="/restaurants" onClick={() => {
//             setIsMobileMenuOpen(false)

//           }}>Restaurants</Link>
//           <Link to="/about" onClick={() => {
//             setIsMobileMenuOpen(false)


//           }}>About</Link>
//         </div>
//         <div className="navbar-icons">
//           <div className="auth-dropdown">
//             {/* <button className="icon-button" onClick={toggleAuthOptions}>
//               <FiUser />
//             </button>
//             {showAuthOptions && (
//               <div className="auth-options">
//                 <Link to="/Login" onClick={() => setShowAuthOptions(false)}>Login</Link>
//                 <Link to="/register" onClick={() => setShowAuthOptions(false)}>Sign Up</Link>
//               </div>
//             )} */}
//           </div>
//           <div className=' flex  justify-evenly items-center  w-52 '>

//             <button className="icon-button">
//               <FiShoppingCart />
//             </button>
//             <button className='   transparent border-solid border-2 border-black hover:p-2 p-1 font-mono text-black '>

//             <Link to='/Login' >

//                           Login/SinUp
//             </Link>
//             </button>
//           </div>

//           <button className="icon-button menu-toggle" onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </div>
//       {isMobileMenuOpen && (
//         <div className="mobile-menu flex  flex-col mt-10 ">
//           <Link to="/" className='font-semibold m-2' onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
//           <Link to="/restaurants"  className='font-semibold m-2' onClick={() => setIsMobileMenuOpen(false)}>Restaurants</Link>
//           <Link to="/about"   className='font-semibold m-2' onClick={() => setIsMobileMenuOpen(false)}>About</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { LuPizza } from "react-icons/lu";
import { Link } from "react-router-dom";
import axios from 'axios';
import './Navbar.css';

import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  let Navigate = useNavigate()
  let [localstorageuser, setuser] = useState('')


  async function cartlength() {
    await  axios.get(`https://mernsstack-hintxx-bites.onrender.com/api/user/${localstorageuser}`).then((res)=>{
      console.log(res,'navbar se')
    }).catch((err)=>{
      console.log(err)
    })

  }

  useEffect(() => {


    const user = JSON.parse(localStorage.getItem('user'));



    setuser(user);
    cartlength()



  }, [])

  console.log('Nvbar se hu', localstorageuser)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={` navbar z-50 ${isMobileMenuOpen ? 'navbar-expanded' : ''}`}>
      <div className="navbar-container">
        <div className='flex justify-center items-center'>
          <LuPizza className="text-2xl mr-2" />
          <div className="navbar-logo">
            <Link to="/" className='text-black text-xl font-bold'>Hint/xx Bites</Link>
          </div>
        </div>
        <div className="navbar-links hidden md:flex">
          <Link to="/" className="mx-4 font-extrabold ">Home</Link>






          {localstorageuser ? (
            localstorageuser === 'admin@gmail.com' ? (
              <p className="font-semibold mx-4 cursor-pointer" onClick={() => Navigate('addfooditmes')}>
                ADDPRODUCTS
              </p>
            ) : (
              <p className="font-semibold mx-4 cursor-pointer" onClick={() => Navigate('/myorder')}>
                MyOrders
              </p>
            )
          ) : (
            ''
          )}

          <Link to="/about" className="  font-extrabold  mx-4">About</Link>
        </div>
        <div className="navbar-icons">


          {
            localstorageuser ? <div className='flex justify-evenly items-center'>
              <button className="icon-button mr-4">

                <FiShoppingCart className="text-2xl" onClick={() => {
                  Navigate('/cart')
                }} />

              </button>
              <button className='hidden md:block border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 px-4 py-2 font-mono text-black rounded' onClick={(e) => {
                localStorage.clear();
                Navigate('/')
                window.location.reload();

              }} >

                LogOut

              </button>
            </div> : <div className='flex justify-evenly items-center'>

              <button className='hidden md:block border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 px-4 py-2 font-mono text-black rounded' onClick={() => {
                Navigate('/Login')
              }} >

                Login/SignUp

              </button>
            </div>
          }



          <button className="icon-button menu-toggle md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu  w-full">
          <Link to="/" className='py-4 px-6 border-b border-gray-200 font-semibold' onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <br />



          {localstorageuser ? (
            localstorageuser === 'admin@gmail.com' ? (
              <p className="font-semibold mx-4 cursor-pointer" onClick={() => Navigate('addfooditmes')}>
                ADDPRODUCTS
              </p>
            ) : (
              <p className="font-semibold mx-4 cursor-pointer" onClick={() => Navigate('/myorder')}>
                MyOrders
              </p>
            )
          ) : (
            ''
          )}

          <br />

          <Link to="/about" className="   font-semibold mx-6">About</Link>
          <br />
          {
            localstorageuser ? <div className='flex  items-center'>
              <button className="icon-button mr-4">
                <FiShoppingCart className="text-2xl" onClick={() => {
                  Navigate('/cart')
                }} />
              </button>
              <button className=' border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 px-4 py-2 font-mono text-black rounded' onClick={(e) => {
                localStorage.clear();
                Navigate('/')
                window.location.reload();

              }} >

                LogOut

              </button>
            </div> : <div className='m-2'>

              <button onClick={(e) => {
                Navigate('/Login')
              }} className=' border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 px-4 py-2 font-mono text-black rounded'>

                Login/SignUp

              </button>
            </div>
          }
        </div>
      )}
    </nav>
  );
};

export default Navbar;


