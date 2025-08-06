'use client';
import React, { use } from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from './page.module.css';
import { productData } from "../data/products";

export default function Home() {
  const [ products, setProducts ] = useState([]);
  const [ productCount, setProductCount ] = useState(0);

  useEffect(() => {
    setProducts(productData);
  }, []);

  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.products}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
      
    </div>    
  );
}

