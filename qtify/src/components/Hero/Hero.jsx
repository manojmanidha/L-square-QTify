import React from 'react'
import style from './Hero.module.css';
import Headphone from '../../assets/headphone.png'

export const Hero = () => {
  return (
    <div className={style.hero}>
        <div>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div className={style.heroimg}>
            <img src={Headphone} alt="headphone" width={212} />
        </div>
    </div>
  )
}
