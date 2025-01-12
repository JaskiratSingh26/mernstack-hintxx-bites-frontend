import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Trash2 } from 'lucide-react';
import { FiShoppingBag } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { FaRupeeSign } from "react-icons/fa";
function Cart() {
  let navigate = useNavigate()
  const [cartItems, setCartItems] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  async function GettingCartItems() {

    await axios.get(`https://mernsstack-hintxx-bites.onrender.com/api/cart/${user}`).then((response) => {
      console.log(response, 'cartitems')
      setCartItems(response.data)
    }).catch((err) => {
      console.log(err, 'from cart file')
    })


  }
  useEffect(() => {

    GettingCartItems()



  }, [])
  console.log('data', cartItems)

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.totalPrice), 0)
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <FiShoppingBag className="mx-auto h-16 w-16 text-gray-400" />
          <h2 className="mt-4 text-2xl font-semibold text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-500">Looks like you haven't added any items yet.</p>
          
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto mt-28 ">
        <div className='flex justify-between items-center '>

          <h1 className="text-3xl font-bold mt-4 text-gray-900 mb-8">Shopping Cart</h1>

          <h1 className='flex  items-center' onClick={async () => {
            await axios.delete(`https://mernsstack-hintxx-bites.onrender.com/api/Emptycart/${user}`).then(() => {
              alert('cart clean')
            }).catch((err) => {
              console.log(err)
            })

          }}  >
            <Trash2 /> Empty cart
          </h1>
        </div>


        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                {cartItems.map((item, index) => (
                  <div key={item.id} className="flex py-6 border-b last:border-0">
                    <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        src={item.foodItem.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="ml-6 flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg max-sm:text-base font-medium text-gray-900">{item.foodItem.name}</h3>
                          <p className="mt-1 text-sm max-sm:text-base  text-gray-500">Quantity: {item.quantity}</p>
                          <p className="mt-1 text-sm max-sm:text-base text-gray-500">Size: {item.size}</p>
                        </div>
                        <p className="text-lg max-sm:text-base font-medium text-gray-900  flex  items-center ">
                          <FaRupeeSign /> {item.totalPrice}


                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">

                        <button
                          className="text-red-500 hover:text-red-700 flex items-center"
                          onClick={async () => {
                            await axios.delete(`https://mernsstack-hintxx-bites.onrender.com/api/removeFromCart/${user}/${item._id}`).then((response) => {
                              console.log(response);
                            })
                              .catch((error) => {
                                console.error(error);
                              });
                            window.location.reload()



                          }}

                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={() => (
                navigate('/')
              )} >
                Continue Shopping
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>

              <h1 className=" flex  items-center text-lg font-medium text-gray-900">Total: <FaRupeeSign />{totalPrice}</h1>

              <button
                className="mt-6 w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"


                onClick={() => {
                  navigate('/myorder')
                  window.location.reload()
                }}

              >
                Proceed to Checkout
              </button>


              <div className="mt-4 text-sm text-gray-500">
                <p>Free shipping on orders over $100</p>

                <p className="mt-1">Cash on delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}


export default Cart




























