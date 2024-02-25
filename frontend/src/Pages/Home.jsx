import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Carousel from "./Carousel";
import ProductCard from "../Components/ProdcutCard";
import { fetchProducts } from "../Services/apiService.js";
import { useRecoilState } from "recoil";

const Home = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchProductsData();
  }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-0">
      <Banner className="mb-6" />
      <Carousel className="mb-6" />
      <ProductCard products={products} />
    </div>
  );
};
export default Home;