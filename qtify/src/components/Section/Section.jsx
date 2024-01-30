import React, { useState } from 'react'
import style from './Section.module.css'
import {  CircularProgress } from '@mui/material'
import Card from '../Card/Card'
import { Carousel } from '../Carousel/Carousel'

const Section = ({data , title , type}) => {

    const [carouselToggel , setCarouselToggel]=useState(true)

    const handleToggle = ()=>{
        setCarouselToggel(!carouselToggel)
    }


  return (
    <div>
        <div className={style.headerText}>
            <h3>{title}</h3>
            <h4 className={style.toggleText} onClick={handleToggle}>
                {!carouselToggel ? 'Collapse' : 'Show All'}
            </h4>
        </div>
        {
            data.length === 0 ? (
                <CircularProgress/>
            ) : (
                <div className={style.cardWrapper}>{!carouselToggel ? (
                    <div className={style.wrapper}>{ data.map((ele)=>(
                        <Card data={ele} type={type}/>
                     ))}
                     </div>  
                )
                 : 
                (<Carousel data={data} renderComponent={(data)=> <Card data={data} type={type} />} />)}
                </div>
            )
        }
    </div>
  )
}

export default Section