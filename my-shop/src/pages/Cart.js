import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <Typography>No items in the cart</Typography>
            ) : (
                cart.map((item, index) => (
                    <div key={index}>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="body2">${item.price}</Typography>
                    </div>
                ))
            )}
            <Button component={Link} to="/">Continue Shopping</Button>
        </div>
    );
};

export default Cart;
