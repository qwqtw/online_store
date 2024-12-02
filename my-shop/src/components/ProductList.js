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
    };

    return (
        <Grid container spacing={2}>
            {products.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{product.name}</Typography>
                            <Typography variant="body2">${product.price}</Typography>
                            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            <Button component={Link} to="/cart">Go to Cart</Button>
        </Grid>
    );
};

export default ProductList;
