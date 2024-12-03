import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo/Title */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="text-white hover:text-indigo-400">
                        AI Artworks
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="space-x-6 text-lg">
                    <Link to="/" className="hover:text-indigo-400 transition duration-300">
                        Home
                    </Link>
                    <Link to="/cart" className="hover:text-indigo-400 transition duration-300">
                        Cart
                    </Link>
                </nav>

                {/* Cart Icon */}
                <div className="flex items-center space-x-4">
                    <Link to="/cart" className="text-white hover:text-indigo-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18l-1.5 9h-15l-1.5-9zm3 14h12v2H6v-2z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
