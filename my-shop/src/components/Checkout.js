import React from 'react';
import { Button } from '@mui/material';
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
        <div>
            <Button onClick={handleCheckout} variant="contained">Checkout with Stripe</Button>
        </div>
    );
};

export default Checkout;
