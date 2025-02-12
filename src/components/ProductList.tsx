import React from "react";
import Product from "./Product";

const ProductList: React.FC = () => {
  const products: Product[] = [
    {
      name: "Laptop",
      description: "High-performance laptop for work and play",
      price: "$999",
      imageUrl:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Smartphone",
      description: "High RAM and responsive screen for daily activities",
      price: "$688",
      imageUrl:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Earphone",
      description:
        "Compact and high-quality audio gear that delivers immersive sound for music, calls, and entertainment",
      price: "$59",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Wireless Mouse",
      description:
        "Responsive pointing device, enhances navigation without the hassle of cabbles",
      price: "$127",
      imageUrl:
        "https://images.unsplash.com/photo-1707592691247-5c3a1c7ba0e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Smartwatch",
      description:
        "Stylish wearable tracker and watch that keep you connected on the go",
      price: "$320",
      imageUrl:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Webcam",
      description:
        "A high-definition camera designed for clear video calls, streaming, and online meetings",
      price: "$100",
      imageUrl:
        "https://images.unsplash.com/photo-1623949556303-b0d17d198863?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <h1>Product List</h1>
      {products.map((product, index) => {
        return <Product key={index} {...product} />;
      })}
    </>
  );
};

export default ProductList;
