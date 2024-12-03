import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: "Artwork 1", price: 50, imgUrl: "/images/artwork1.jpg" },
        { id: 2, name: "Artwork 2", price: 40, imgUrl: "/images/artwork2.jpg" },
        // Add more products here
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
        localStorage.setItem('cart', JSON.stringify([...cart, product])); // Save to localStorage
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {products.map((product) => (
                <div key={product.id} className="flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <div className="w-full h-64 relative">
                        <img
                            src={product.imgUrl}
                            alt={product.name}
                            className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                            loading="lazy"
                        />
                    </div>
                    <div className="p-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                        <p className="text-lg font-semibold text-gray-500">${product.price}</p>
                        <button
                            onClick={() => addToCart(product)}
                            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
            <div className="text-center mt-6">
                <Link to="/cart">
                    <button className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition duration-300">
                        Go to Cart
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductList;
