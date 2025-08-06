import React from "react";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { productData } from "@/data/products";

export default function Header() {
    const [ products, setProducts ] = useState([]);
    const [ productCount, setProductCount ] = useState(0);

    useEffect(() => {
        setProducts(productData);
        setProductCount(productData.length);
    }, []);
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.title}>Loja de Eletrônicos</h1>
                <p>Os melhores produtos com os melhores preços!</p>
                <p className={styles.subtitle}>Total de Produtos: {productCount}</p>
            </div>
        </header>
    );
}
