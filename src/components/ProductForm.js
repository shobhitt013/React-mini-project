import React, { useState } from 'react';
import { addProduct } from '../api/products';
import { Button, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ProductForm() {
  const [form, setForm] = useState({ name: '', price: '', quantity: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      name: form.name,
      price: Number(form.price),
      quantity: Number(form.quantity)
    }).then(() => navigate('/'));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, maxWidth: 400, mx: "auto" }}>
      <h2>Add New Product</h2>
      <TextField
        label="Name"
        name="name"
        fullWidth
        margin="normal"
        value={form.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Price"
        name="price"
        type="number"
        fullWidth
        margin="normal"
        value={form.price}
        onChange={handleChange}
        required
      />
      <TextField
        label="Quantity"
        name="quantity"
        type="number"
        fullWidth
        margin="normal"
        value={form.quantity}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Add Product
      </Button>
    </Box>
  );
}

export default ProductForm;
