"use client";
import { useState, useEffect } from "react";
import { getProducts } from "../util/api";
import Card from "./Card";

function ProductsWrapper() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <div
                style={{ backgroundImage: `url("bg-index.png")` }}
                className="h-96 w-full bg-cover bg-center"
            ></div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductsWrapper;
