import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: "Artwork 1", price: 50 },
        { id: 2, name: "Artwork 2", price: 40 },
        // Add more products here
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
        localStorage.setItem('cart', JSON.stringify([...cart, product])); // Save to localStorage
    };

    return (
        <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 2 }}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                                {product.name}
                            </Typography>
                            <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                                ${product.price}
                            </Typography>
                            <Button
                                onClick={() => addToCart(product)}
                                variant="contained"
                                sx={{ marginTop: 2, width: '100%' }}
                            >
                                Add to Cart
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            <Button
                component={Link}
                to="/cart"
                variant="outlined"
                sx={{ marginTop: 3, display: 'block', width: '100%' }}
            >
                Go to Cart
            </Button>
        </Grid>
    );
};

export default ProductList;
