import React, { useEffect, useState } from 'react'
import { useSwiper} from 'swiper/react';
// import rightIcon from '../../assets/right.png'
import {ReactComponent as RightIcon} from '../../assets/rightarrow.svg';
import style from './Carousel.module.css'




const CarouselRightNavigation = () => {
    const swiper = useSwiper()
    const [isEnd , setIsEnd] = useState(swiper.isEnd)

    useEffect(()=>{
       swiper.on('slideChange', function(){
        setIsEnd(swiper.isEnd)
       })
    },[isEnd])
  return (
    <div className={style.rightwrapper}>
        {!isEnd && <RightIcon onClick={()=>swiper.slideNext()} /> 
        }
        
    </div>
  )
}

export default CarouselRightNavigation