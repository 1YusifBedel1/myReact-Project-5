import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <nav>
    <div className="container">
      <img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png" alt="" />
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={'/admin'}>Admin</Link></li>
        <li><Link to={'add'}>Add</Link></li>
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