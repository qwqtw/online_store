import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    return (
        <div className="p-6">
            <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>
            {cart.length === 0 ? (
                <p>No items in the cart</p>
            ) : (
                cart.map((item, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-lg text-gray-600">${item.price}</p>
                    </div>
                ))
            )}
            <Link to="/">
                <button className="mt-6 px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition duration-300">
                    Continue Shopping
                </button>
            </Link>
        </div>
    );
};

export default Cart;
