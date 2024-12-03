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
                <div key={product.id} className="max-w-sm mx-auto bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
                    <img src={product.imgUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-lg text-gray-500">${product.price}</p>
                        <button
                            onClick={() => addToCart(product)}
                            className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
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
