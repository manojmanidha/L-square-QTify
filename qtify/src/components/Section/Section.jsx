import React, { useState } from 'react'
import style from './Section.module.css'
import {  Box, CircularProgress } from '@mui/material'
import Card from '../Card/Card'
import { Carousel } from '../Carousel/Carousel'
import BasicTabs from '../Tab/Tab'

const Section = ({data , title , type ,filteredData=null , filteredDataValues=[] , value=0 , handleChange=null}) => {

    const [carouselToggel , setCarouselToggel]=useState(true)

    const handleToggle = ()=>{
         setCarouselToggel(!carouselToggel)
    }


  return (
    <div>
        <div className={style.headerText}>
            <h3>{title}</h3>
            <h4 className={style.toggleText} onClick={handleToggle}>
                {carouselToggel ? 'Show All' : 'Collapse All'}
            </h4>
        </div>
        {type==="song" ? <BasicTabs value={value} handleChange={handleChange} /> : <></>}
        {
            filteredDataValues.length === 0 ? (
                <Box sx={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                  <CircularProgress/>  
                </Box>
            ) : (
                <div className={style.cardWrapper}>
                    {!carouselToggel ? (
                    <div className={style.wrapper}>{ filteredDataValues.map((ele)=>(
                        <Card data={ele} type={type} key={ele.id}/>
                     ))}
                     </div>  
                )
                 : 
                (<Carousel data={filteredDataValues} renderComponent={(data)=> <Card data={data} type={type} />} />)}
                </div>
            )
        }
    </div>
  )
}

export default Section