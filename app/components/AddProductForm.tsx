'use client'

import { useState } from 'react';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    photo: '',
    review: '',
    offer: '',
    cost: '',
    price: '',
    tax: '',
    stock: '',
    stock_limit_min: '',
    stock_limit_max: '',
    brandId: '',
    categoryId: '',
    subcategoryId: '',
    originId: '',
    vehicleId: '',
    useStatusId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Replace this URL with your actual backend API endpoint
      const response = await fetch(`https://globe-motors-backend.vercel.app/api/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    //   const response = await axios.post('/api/products', formData);
      console.log('Product added:', response.json());
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="photo">Photo URL:</label>
        <input
          type="text"
          id="photo"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          name="review"
          value={formData.review}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="offer">Offer:</label>
        <input
          type="number"
          id="offer"
          name="offer"
          value={formData.offer}
          onChange={handleChange}
          step="0.01"
        />
      </div>

      <div>
        <label htmlFor="cost">Cost:</label>
        <input
          type="number"
          id="cost"
          name="cost"
          value={formData.cost}
          onChange={handleChange}
          step="0.01"
          required
        />
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          step="0.01"
          required
        />
      </div>

      <div>
        <label htmlFor="tax">Tax:</label>
        <input
          type="number"
          id="tax"
          name="tax"
          value={formData.tax}
          onChange={handleChange}
          step="0.01"
        />
      </div>

      <div>
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="stock_limit_min">Stock Limit Min:</label>
        <input
          type="number"
          id="stock_limit_min"
          name="stock_limit_min"
          value={formData.stock_limit_min}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="stock_limit_max">Stock Limit Max:</label>
        <input
          type="number"
          id="stock_limit_max"
          name="stock_limit_max"
          value={formData.stock_limit_max}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="brandId">Brand ID:</label>
        <input
          type="number"
          id="brandId"
          name="brandId"
          value={formData.brandId}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="categoryId">Category ID:</label>
        <input
          type="number"
          id="categoryId"
          name="categoryId"
          value={formData.categoryId}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="subcategoryId">Subcategory ID:</label>
        <input
          type="number"
          id="subcategoryId"
          name="subcategoryId"
          value={formData.subcategoryId}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="originId">Origin ID:</label>
        <input
          type="number"
          id="originId"
          name="originId"
          value={formData.originId}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="vehicleId">Vehicle ID:</label>
        <input
          type="number"
          id="vehicleId"
          name="vehicleId"
          value={formData.vehicleId}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="useStatusId">Use Status ID:</label>
        <input
          type="number"
          id="useStatusId"
          name="useStatusId"
          value={formData.useStatusId}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
