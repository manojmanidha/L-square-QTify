import React, { useEffect, useState } from 'react'
import { useSwiper} from 'swiper/react';
// import leftIcon from '../../assets/left.png'
import {ReactComponent as LeftIcon} from '../../assets/leftarrow.svg';
import style from './Carousel.module.css'



const CarouselLeftNavigation = () => {
    const swiper = useSwiper()
    const [isbegining , setIsbegining] = useState(swiper.isBeginning)

    useEffect(()=>{
       swiper.on('slideChange', function(){
        setIsbegining(swiper.isbegining)
       })
    },[isbegining])
  return (
    <div className={style.leftWrapper}>
        {!isbegining ? <LeftIcon onClick={()=>swiper.slidePrev()} /> : <></> }
    </div>
  )
}

export default CarouselLeftNavigation