import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Similarfood from './Similarfood';
import { useNavigate } from 'react-router-dom';



function SingleFood() {

  const { id } = useParams();
  let Navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('user'));



  const [item, setItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  //   let type=item.type
  // console.log(type,'type h iska ')
  async function sendRequest() {
    try {
      let response = await axios.post(`https://mernsstack-hintxx-bites.onrender.com/api/IdFecthing/${id}`);
      console.log(response.data.data);
      setItem(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    sendRequest();
  }, [id]);

  useEffect(() => {
    console.log('Updated item:', item);
  }, [item]);

  const handleSizeChange = (event) => {
    const [size, price] = event.target.value.split('-');
    setSelectedSize({ size, price: parseFloat(price) });
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const totalPrice = selectedSize ? (selectedSize.price * quantity).toFixed(2) : 0;

  if (!item) {
    return <div className="min-h-screen flex justify-center items-center text-2xl font-bold text-gray-700">Loading...</div>;
  }

  if (!item.sizes || item.sizes.length === 0) {
    return <div className="min-h-screen flex justify-center items-center text-2xl font-bold text-gray-700">No sizes available.</div>;
  }
  let type = item.type
  console.log(type, 'type h iska ')

  return (
    <div className="  mt-5 min-h-screen bg-gradient-to-r from-purple-50 to-indigo-50">
      <div className="h-full p-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden h-full">
          <div className="p-8 flex flex-col md:flex-row gap-8 h-full">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img src={item.image} alt={item.name} className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-md" />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6 text-gray-800">{item.name}</h1>
              <p className="text-xl text-gray-600 mb-8">{item.description}</p>

              {/* Quantity Input */}
              <div className="mb-8">
                <label htmlFor="quantity" className="block text-xl font-medium text-gray-700 mb-3">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-24 p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 text-lg"
                />
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <label htmlFor="size" className="block text-xl font-medium text-gray-700 mb-3">Select Size:</label>
                <select
                  id="size"
                  name="size"
                  onChange={handleSizeChange}
                  className="w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 text-lg"
                >
                  <option value="">Select size</option>
                  {item.sizes.map((size) => (
                    <option key={size._id} value={`${size.size}-${size.price}`}>
                      {size.size} - ₹{size.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Size and Price Details */}
              {selectedSize && (
                <div className="mt-8 p-6 bg-purple-50 rounded-lg shadow-inner">
                  <h2 className="text-2xl font-semibold text-gray-700 mb-3">Selected Size: <span className="text-purple-600">{selectedSize.size}</span></h2>
                  <h2 className="text-2xl font-semibold text-gray-700 mb-3">Price per item: <span className="text-purple-600">₹ {selectedSize.price}</span></h2>
                  <h2 className="text-2xl font-semibold text-gray-700">Total Price: <span className="text-purple-600">₹{totalPrice}</span></h2>
                </div>
              )}

              {/* Food Type */}
              <div className="mt-6">
                <h1 className="text-xl font-medium text-gray-700">Type: <span className="font-bold">{item.type}</span></h1>
              </div>

              <button
                onClick={() => {


                  if (!user) {
                     return Navigate('/Login')
                  }
                  if (!selectedSize) {
                    alert('Please select a size before adding to cart.'); // or use a more user-friendly error message
                    return; // Stop further execution
                  }
                  else {
                    console.log(user)
                    const cartItem = {
                      userEamil: user,
                      foodItemId: id,
                      size:selectedSize.size,
                      quantity: quantity,
                      totalPrice: totalPrice,
                    };
                    console.log('sending this daata to cart', cartItem)
                    axios.post('https://mernsstack-hintxx-bites.onrender.com/api/addToCart',cartItem)
                      .then((response) => {
                        console.log(response);
                      })
                      .catch((error) => {
                        console.error(error);
                      });


                      Navigate('/cart')
                      window.location.reload();

                  }
                }}
                className="mt-4 p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>



      <div>
        {/* foor another file */}

        <Similarfood type={type} />

      </div>

    </div>
  );
}

export default SingleFood;