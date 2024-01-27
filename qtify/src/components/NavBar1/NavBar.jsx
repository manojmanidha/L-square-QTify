import React from 'react'
import styles from './NavBar.module.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Search from '../Search/Search';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo/>
      <Search placeholder='Search a album of your choice'/>
      <Button text='Give Feedback' />
    </nav>
  )
}

export default NavBar