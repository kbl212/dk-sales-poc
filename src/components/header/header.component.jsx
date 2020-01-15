import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
  <div className='header'>
  <Link className='logo-container' to="/">
    <img src={require('../../assets/dk_logo_3.png')} alt="logo" className='logo' />
  </Link>
  <div className='options'>
    <Link className='option' to='/shop'>
      SHOP
    </Link>
    <Link className='option' to='/shop'>
      CONTENT
    </Link>
    <Link className='option' to='/signIn'>
      SIGN IN
    </Link>
  </div>
  </div>
)

export default Header;