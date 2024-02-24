import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import sonyheadset from '../Assets/picture/sonyheadset.png'
import bootle from '../Assets/picture/bootle.png'
import ladiesitem from '../Assets/picture/ladiesitems.png'
import shirt from '../Assets/picture/Screenshot 2024-02-24 154935.png'
function ProductDetail() {
    return (
        <div style={{backgroundColor:"#FFF0F5" ,}}>
        <div className='w-10/12' style={{marginLeft:"120px"}}>
            <div>
              
                <div className='w-[38rem]'>

                </div>
                {/* Image Swiper for Smal*/}
                <Swiper
                    slidesPerView={1}
                    modules={[Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    color={"yellow-5"}
                    pagination={{ clickable: true }}

                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay={{ delay: 2000 }}
                    className=""
                    style={{ height: "400px", width: "100%" }}
                    
                >

                    <SwiperSlide><img
                        src={sonyheadset}
                        alt="product"
                        // className='w-full h-auto'
                        className="hover:border-2"
                        style={{ width: "100%", height: "350px" ,borderRadius:"20px" }}
                    /></SwiperSlide>
                    <SwiperSlide><img src={bootle} alt="Become a Seller" class="_1XmrCc"

                        // className='w-full h-auto'
                        className="hover:border-2"
                        style={{ width: "100%", height: "350px",borderRadius:"20px"}}
                    /></SwiperSlide>

                    <SwiperSlide><img src={ladiesitem} alt="Become a Seller" class="_1XmrCc"

                        // className='w-full h-auto'
                        className="hover:border-2"
                        style={{ width: "100%", height: "350px",borderRadius:"20px"}}
                    /></SwiperSlide>
                    

                    <SwiperSlide><img src={shirt} alt="Become a Seller" class="_1XmrCc"

                        // className='w-full h-auto'
                        className="hover:border-2"
                        style={{ width: "100%", height: "350px",borderRadius:"20px" }}
                    /></SwiperSlide>
                 


                </Swiper>

                {/* Details */}
                {/* Related Items (You might need to implement related items section here) */}
                {/* ... */}

            </div>
        </div>
        </div>
    );
}

export default ProductDetail;