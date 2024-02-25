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
    <>
    <Header></Header>
      <Banner />
      <Carousel />
      <ProductCard products={products} />
    </>
  );
};
export default Home;
