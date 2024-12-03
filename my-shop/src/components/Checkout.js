import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('your_public_stripe_key');

const Checkout = () => {
    const handleCheckout = async () => {
        const { data: { id } } = await axios.post('http://localhost:8000/create-checkout-session');
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({ sessionId: id });
        if (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center mt-12">
            <button
                onClick={handleCheckout}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition duration-300"
            >
                Checkout with Stripe
            </button>
        </div>
    );
};

export default Checkout;
