import React, { useState } from 'react';
import axios from 'axios';

const AddFoodItem = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [sizes, setSizes] = useState([]);
  const [prices, setPrices] = useState({});

  const categories = [
    { name: 'chinese', sizes: ['Small', 'Medium', 'Large'] },
    { name: 'indian', sizes: ['Full', 'Half'] },
  ];

  const handleCategoryChange = (e) => {
    const selectedCategory = categories.find((category) => category.name === e.target.value);
    setCategory(e.target.value);
    setSizes(selectedCategory.sizes);
  };

  const handlePriceChange = (size, value) => {
    setPrices({ ...prices, [size]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const foodItem = {
      name,
      image,
      category,
      type,
      sizes: sizes.map((size) => ({ size, price: prices[size] })),
    };
    // http://localhost:5000

    let response = await axios.post('https://mernsstack-hintxx-bites.onrender.com/api/addfood', foodItem);
    console.log(response);
    setName(" ")
    setImage('')
    setCategory('')
    setType('')
    setSizes([])
    setPrices([])
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center "
      style={{
        backgroundImage: `url('https://www.franchiseindia.com/uploads/content/ri/art/fast-food-e21500cbfa.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode:'lighten'
      }}
    >
      <div className="rounded-lg shadow-2xl p-8   w-[50vh] transform transition-all hover:scale-105 hover:rotate-1">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Add Food Item</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block \  text-white font-bold text-[2vh] ">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/70"
            />
          </div>
          <div>
            <label className="block   text-white font-bold text-[2vh]">Image URL:</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/70"
            />
          </div>
          <div>
            <label className="block   text-white font-bold text-[2vh]">Category:</label>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/70"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block   text-white font-bold text-[2vh]">Type:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/70"
            >
              <option value="">Select type (VEG/NON-VEG)</option>
              <option value="veg">VEG</option>
              <option value="non-veg">NON-V EG</option>
            </select>
          </div>

          {sizes.map((size) => (
            <div key={size}>
              <label className="block t  text-white font-bold text-[2vh]">
                {size}:
              </label>
              <input
                type="number"
                value={prices[size] || ''}
                onChange={(e) => handlePriceChange(size, e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/70"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-2 rounded-md shadow-md hover:bg-indigo-700 transition duration-200"
          >
            Add Food Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFoodItem;