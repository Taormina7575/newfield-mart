import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Header.css";
import newpylogo from './../assets/newpylogo.png'
import facebookLogo from './../assets/facebookLogo.png'
import googlelogo from './../assets/googlelogo.png'

export default function Header() {
  return (
    <header className="header">
      <div className='preHeader'>
        <p className='preHeaderText'>Phone Number: (856) 839-0203 --- <a className='preHeaderText' href='https://www.google.com/maps/dir//newfield+food+mart,+1381+Harding+Hwy,+Newfield,+NJ+08344/@39.5535484,-74.999819,17z/data=!3m1!5s0x89c72ceca532cc07:0x8f8e0ace950ea61f!4m8!4m7!1m0!1m5!1m1!1s0x89c72db785ced0cd:0x4a27f2019e80e46d!2m2!1d-74.9976303!2d39.5535443'>Address: 1381 Harding Hwy Newfield, NJ, 08344-5323</a> </p>
        <a href='https://www.facebook.com/Newfield-Food-Mart-102478735076598/'>
          <img alt='facebook logo' src={facebookLogo} className='facebookLogo'></img>
        </a>
        <a href="https://www.google.com/maps/place/newfield+food+mart/@39.5535484,-74.999819,17z/data=!3m1!5s0x89c72ceca532cc07:0x8f8e0ace950ea61f!4m7!3m6!1s0x89c72db785ced0cd:0x4a27f2019e80e46d!8m2!3d39.5535443!4d-74.9976303!9m1!1b1">
              <img
                alt="google logo"
                src={googlelogo}
                className="facebookLogo2"
              ></img>
            </a>
      </div>
      <div className='content'>
        <img alt='Newfield Mart Logo' src={newpylogo} className='newpyLogo'></img>
        <nav className='navLinkGroup'>
          <NavLink to='/' exact={true} className='navLink' activeClassName="active">Home</NavLink>
          <NavLink to='/store' className='navLink' activeClassName="active">Store</NavLink>
          <NavLink to='/menu' className='navLink' activeClassName="active">Menu</NavLink>
          <NavLink to='/about' className='navLink' activeClassName="active">About</NavLink>
        </nav>
      </div>
    </header>
  );
}
