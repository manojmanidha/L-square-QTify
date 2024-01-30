import React, { useEffect } from 'react'
import style from './Carousel.module.css'
// import Swiper from 'swiper';
import {SwiperSlide,Swiper , useSwiper} from 'swiper/react';
import { Navigation} from 'swiper/modules';
import CarouselLeftNavigation from './CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation';
import 'swiper/css';


const Controls = ({data})=>{
    const swiper = useSwiper();
    useEffect(()=>{
      swiper.slideTo(0 , 0);
    },[data ]);
    return <></>

}

export const Carousel = ({data , renderComponent}) => {
  return (
    <div className={style.wrapper}>
         <Swiper
         style={{padding : '0px 20px'}}
         initialSlide={0}
         slidesPerView='auto'
         allowTouchMove 
         modules={[Navigation]}
         spaceBetween={40}
         >
         <Controls/>
         <CarouselLeftNavigation/>
         <CarouselRightNavigation/>
         {
            data.map((ele)=>{
                return (
                    <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
                )
            })
         }
         </Swiper>
    </div>
  )
}
