import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
// import Posts from './Posts/Posts'
import Carousel from './Carousel'
import ProductCard from '../components/ProdcutCard'
import { fetchProducts } from '../Services/apiService'

const Home = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
          const response = await fetchProducts();
          setProducts(response);
      } catch (error) {
          console.error('Error fetching categories:', error);
      }
    };
    fetchProductsData();
  })
  return (
    <>
      <Header />
      <Banner />
      <Carousel />
      <ProductCard products={products}/>
      {/* <Posts /> */}
    </>
  )
}
export default Home
