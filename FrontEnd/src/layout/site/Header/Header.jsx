import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
      <div className="container">
        <img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png" alt="" />
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/basket"}>Basket</Link></li>
          <li><Link to={'/admin'}>Admin</Link></li>
          <li><Link to={'#'}>Gallery</Link></li>
          <li><Link to={'#'}>About</Link></li>
          <li><Link to={'#'}>Blog</Link></li>
          <li><Link to={'#'}>Contact</Link></li>
        </ul>
        <div className="navIcons">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  )
}

export default Header