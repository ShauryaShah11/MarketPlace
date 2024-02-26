import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Link } from 'react-router-dom';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { IoShareSocialOutline } from "react-icons/io5";
import { BookProduct } from "../Services/functions/payment";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDataById } from "../Services/functions/product";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const bigImageRef = useRef(null);
  const [swiperHeight, setSwiperHeight] = useState(0);
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getProductDataById(id);
        setProduct(response);
        setCurrentImage(response.images[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (bigImageRef.current) {
      const height = bigImageRef.current.clientHeight;
      setSwiperHeight(height);
    }
  }, [product]);

  const handlePayment = async () => {
    await BookProduct(product.price, navigate, id);
  };
 
  
  return (
    <>
    
    <Header/>
    <div className="container mx-auto p-4 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {/* Left side for images */}
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <div className="w-full h-80 md:h-full">
            <Swiper
              slidesPerView={1}
              direction="vertical"
              spaceBetween={4}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              autoplay={{ delay: 3000 }}
              style={{ height: swiperHeight }}
            >
              {product?.images.map((imageUrl, index) => (
                <SwiperSlide key={index}>
                  <img
                    onClick={() => {
                      setCurrentImage(imageUrl);
                    }}
                    src={imageUrl}
                    alt={product?.name}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Big Image */}
          <div ref={bigImageRef} className="max-w-lg mx-auto mt-6">
            <img
              src={currentImage}
              alt="product"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Right side for content */}
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          {/* Content */}
          <div>
            {/* Product Details */}
            <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-lg font-semibold">${product?.price}</p>
                <IoShareSocialOutline className="text-gray-500" />
              </div>
              <p className="text-xl font-semibold">{product?.name}</p>
              <p className="text-gray-600 mt-2">
                {new Date(product?.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600">{product?.description}</p>
            </div>
          </div>
          {/* Owner Info and Payment Button */}
          <div className="flex items-center justify-between bg-white rounded-lg shadow-lg p-6 mt-4">
            <div>
              <p className="text-lg font-semibold">
                {product?.ownerId?.name}
              </p>
              <p className="text-gray-600">Ask a question to the owner</p>
            <Link to ="http://localhost:3001/">
            <button
              className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full border border-pink-600 hover:bg-black-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            
              style={{marginTop:"10px"}}
            >
              Chat with user
            </button>
            </Link>
            </div>
          </div>
            <button
              className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-full border border-purple-600 hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              onClick={handlePayment}
              style={{marginBottom:"10px",marginTop:"10px"}}
            >
              Book Product
            </button>
            
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ProductDetail;
