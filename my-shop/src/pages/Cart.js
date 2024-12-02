import React from 'react';
import { Button, Typography, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>Your Cart</Typography>
            {cart.length === 0 ? (
                <Typography>No items in the cart</Typography>
            ) : (
                cart.map((item, index) => (
                    <Paper
                        key={index}
                        sx={{ padding: 2, marginBottom: 2, backgroundColor: '#f5f5f5' }}
                    >
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="body2">${item.price}</Typography>
                    </Paper>
                ))
            )}
            <Button
                component={Link}
                to="/"
                variant="outlined"
                sx={{ marginTop: 3 }}
            >
                Continue Shopping
            </Button>
        </div>
    );
};

export default Cart;
