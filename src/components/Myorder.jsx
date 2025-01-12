import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser } from "react-icons/fa";

function Myorder() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [myOrder, setMyOrder] = useState([]);
    const [groupedOrders, setGroupedOrders] = useState({});

    const[userdatadoc,setuserdata]=useState({});

 async function userdata() {
    await axios.get(`https://mernsstack-hintxx-bites.onrender.com/api/user/${user}`).then((res)=>{
        console.log(res,'userdata')
        setuserdata(res.data.data)
        
    }).catch((err)=>{
        console.log(err)
    })

    
 }
console.log('doc',userdatadoc)
    async function callingapi() {
        await axios.post(`https://mernsstack-hintxx-bites.onrender.com/api/myorder/${user}`)
            .then((res) => {
                console.log(res);
                setMyOrder(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        userdata()
        callingapi();
        
    }, []);

    useEffect(() => {
        const grouped = myOrder.reduce((acc, order) => {
            const date = order.date;
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(order);
            return acc;
        }, {});
        setGroupedOrders(grouped);
    }, [myOrder]);

    const getCurrentDate = () => {
        const now = new Date();
        return now.toLocaleDateString(); // Format the date as per the user's locale
    };

    return (
        <>
            <div className="mt-20 min-h-screen p-6 bg-gray-100">
                {/* User Account Details Section */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-2xl p-8 mb-8 transform transition-transform hover:scale-102 hover:shadow-3xl flex flex-col sm:flex-row items-center">
                    {/* User Logo (Icon) - Left Side */}
                    <div className="w-32 h-32 sm:w-48 sm:h-48 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg transform transition-transform hover:scale-110 hover:shadow-2xl">
                        <FaUser  className="text-white text-6xl sm:text-8xl" />
                    </div>
    
                    {/* User Details - Right Side */}
                    <div className="ml-0 sm:ml-8 mt-6 sm:mt-0 flex-1">
                        <h1 className="text-3xl font-bold mb-6 text-center sm:text-left text-gray-800">Your Account Details</h1>
                        
                        {/* Name, Email, and Password in Bold Letters */}
                        <div className="space-y-4">
                            <p className="text-lg text-gray-800">
                                <span className="font-bold">Name:</span> {userdatadoc.name}
                            </p>
                            <p className="text-lg text-gray-800">
                                <span className="font-bold">Email:</span> {userdatadoc.email}
                            </p>
                            <p className="text-lg text-gray-800">
                                <span className="font-bold">Password:</span> {userdatadoc.password}
                            </p>
                        </div>
                    </div>
                </div>
    
                {/* Order History Section */}
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Order History</h1>
    
                {Object.keys(groupedOrders).map((date) => (
                    <div key={date} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-700">ORDER ON: {date}</h2>
                        <div className="space-y-6">
                            {groupedOrders[date].map((item) => (
                                <div key={item._id} className="flex flex-col max-sm:flex-col bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl sm:flex-row sm:justify-around">
                                    {/* Image on top for small screens, left for larger screens */}
                                    <div className="w-full max-sm:w-full sm:w-1/3 p-4">
                                        <img
                                            src={item.foodItem.image}
                                            alt={item.foodItem.name}
                                            className="w-full h-48 object-cover rounded-lg"
                                        />
                                    </div>
    
                                    {/* Content below the image for small screens, right for larger screens */}
                                    <div className="w-full max-sm:w-full p-6 flex flex-col justify-center">
                                        <h2 className="text-2xl font-bold mb-2 text-gray-800">{item.foodItem.name}</h2>
                                        <p className="text-gray-600 mb-1"><span className="font-semibold">Quantity:</span> {item.quantity}</p>
                                        <p className="text-gray-600 mb-1"><span className="font-semibold">Size:</span> {item.size}</p>
                                        <p className="text-gray-600 mb-1"><span className="font-semibold">Total Price:</span> ${item.totalPrice}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Myorder;