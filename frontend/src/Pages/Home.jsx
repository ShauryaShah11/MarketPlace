import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
// import Posts from './Posts/Posts'
import Carousel from './Carousel'
import ProductCard from '../Components/ProdcutCard'
import { fetchProducts } from '../Services/apiService'
import Footer from '../Components/Footer/Footer'

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
      <Footer></Footer>
    </>
  )
}
export default Home
