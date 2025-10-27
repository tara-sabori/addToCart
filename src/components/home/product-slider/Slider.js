import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { PiArrowRightBold } from "react-icons/pi";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import ProductsCard from '../../products/products-card/ProductsCard';
import { Link } from 'react-router-dom';


const Slider = ({slides}) => {
    const [swiperRef, setSwiperRef] = useState(null);
  return (
     <>
        <Swiper
            modules={[Virtual, Navigation, Pagination]}
            onSwiper={setSwiperRef}
            navigation={true}
            autoHeight
            breakpoints={{
            0: {        // موبایل
            slidesPerView: 1.1,
            spaceBetween: 10,
            },
           640: {      // تبلت
            slidesPerView: 2,
            spaceBetween: 15,
            },
           1024: {     // دسکتاپ
            slidesPerView: 3,
            spaceBetween: 20,
            },
            1536:{
            slidesPerView: 4,
            spaceBetween: 15,
            }
        }}
            >
            {slides.map((slideContent, index) => (
                <SwiperSlide key={slideContent?.id}>
                    <ProductsCard product={slideContent} className={"w-full md:w-[250px]"} />
                </SwiperSlide>
            ))}
            <SwiperSlide>
                <div className='p-2.5 w-full md:w-[250px] h-[320px]'>
                    <Link to={"/products"}  className='bg-secondary-100 rounded-md  flex items-center justify-center w-full h-full text-sm'>
                            <div className='flex items-end gap-2'>
                                <span className='text-secondary-800 font-semibold'>More Products</span>
                                <PiArrowRightBold className='text-orange-950' size={18} />
                            </div>
                    </Link>
                </div>
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default Slider