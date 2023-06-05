import React from 'react'
import '../../App.css';

const Header = ({executeScroll}) => {
  return (
    <header className='header'>
    <nav className='header__wrapper'>
      <p onClick={executeScroll} className='header__wrapper_link'>О НАС</p>
      <p className='header__wrapper_link'>УСЛУГИ</p>
      <p className='header__wrapper_link'>АВТОПАРК</p>
      <p className='header__wrapper_link'>КОНТАКТЫ</p>
    </nav>
  </header>
  )
}

export default Header;