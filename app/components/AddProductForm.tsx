"use client";

import { useState } from "react";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    photo: "",
    review: "",
    offer: "",
    cost: "",
    price: "",
    tax: "",
    stock: "",
    stock_limit_min: "",
    stock_limit_max: "",
    brandId: "",
    categoryId: "",
    subcategoryId: "",
    originId: "",
    vehicleId: "",
    useStatusId: "",
  });

  const [photoFile, setPhotoFile] = useState<File | null>(null); // State to store the uploaded photo file

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      if (photoFile) {
        formDataToSend.append("photo", photoFile); // Append the photo file to the form data
      }

      // Replace this URL with your actual backend API endpoint
      const response = await fetch(`https://globe-motors-backend.vercel.app/api/products`, {
        method: "POST",
        body: formDataToSend,
      });

      console.log("Product added:", await response.json());
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Product</h2>

      <div className="flex flex-col space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mt-2 mb-1">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="offer" className="block text-sm font-medium text-gray-700 mb-1">Offer:</label>
          <input
            type="number"
            id="offer"
            name="offer"
            value={formData.offer}
            onChange={handleChange}
            step="0.01"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="cost" className="block text-sm font-medium text-gray-700 mb-1">Cost:</label>
          <input
            type="number"
            id="cost"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            step="0.01"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="stock_limit_min" className="block text-sm font-medium text-gray-700 mb-1">Stock Limit Min:</label>
          <input
            type="number"
            id="stock_limit_min"
            name="stock_limit_min"
            value={formData.stock_limit_min}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="stock_limit_max" className="block text-sm font-medium text-gray-700 mb-1">Stock Limit Max:</label>
          <input
            type="number"
            id="stock_limit_max"
            name="stock_limit_max"
            value={formData.stock_limit_max}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Product
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProductForm;
