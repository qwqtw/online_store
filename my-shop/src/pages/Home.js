import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-8">
            {/* Header Section */}
            <header className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                    Discover Stunning AI Artworks
                </h1>
                <p className="text-lg text-gray-600">
                    Browse and purchase unique AI-generated art pieces.
                </p>
            </header>

            {/* Product List Section */}
            <div className="container mx-auto px-4">
                <ProductList />
            </div>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-6 mt-12">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 AI Artworks. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
