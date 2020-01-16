import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser }) => (
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
    {
      currentUser ? (
      <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
      :
      (<Link className='option' to='/signIn'>SIGN IN</Link>)
    }
  </div>
  </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);