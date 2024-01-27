import React from 'react'
import style from './Search.module.css';
import {ReactComponent as SearchIcon} from '../../assets/SearchIcon.svg'

const Search = ({placeholder}) => {
  return (
    <form className={style.wraper} >
        <div>
        <input className={style.search} type="text" placeholder={placeholder}  />
        </div>
        <div>
        <button className={style.searchButton}><SearchIcon/></button>
        </div>
    </form>       
  )
}
 
export default Search