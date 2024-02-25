import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Carousel from "./Carousel";
import ProductCard from "../components/ProdcutCard";
import { fetchProducts } from "../services/apiService.js";
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
    <>
      <Banner />
      <Carousel />
      <ProductCard products={products} />
    </>
  );
};
export default Home;
