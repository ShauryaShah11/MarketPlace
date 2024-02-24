import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Posts from '../Posts/Posts'
import Carousel from '../Carousel'
import Footer from '../Footer/FinalFooter'
const Home = () => {
  return (
    <>
         <Header />
      <Banner />
      <Carousel></Carousel>
      <Posts />
      <Footer></Footer>
    </>
  )
}
export default Home
