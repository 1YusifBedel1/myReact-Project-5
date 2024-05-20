import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
    <div className="container pt-5 pm-5">
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <h4 className="pb-3">Contact Us</h4>
          <ul className="pb-5">
            <li>
              <i className="fa-solid fa-location-dot pe-2"></i>
              8th floor, 379 Hudson St, New York, NY 10018
            </li>
            <li>
              <i className="fa-solid fa-phone pe-2"></i>
              (+1) 96 716 6879
            </li>
            <li>
              <i className="fa-solid fa-envelope pe-2"></i>
              contact@site.com
            </li>
          </ul>
          <h4 className="pb-3">OPENING TIMES</h4>
          <ul>
            <li>09:30 AM – 11:00 PM</li>
            <li>Every Day</li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-6">
          <h4 className="pb-3">Latest Twitter</h4>
          <ul className="pb-5">
            <li>
              <i className="fa-brands fa-twitter pe-2"></i>
              @colorlib
              <p>
                Activello is a good option. It has a slider built into that
                displays the featured image in the slider.
              </p>
              <Link to="#">https://buff.ly/2zaSfAQ</Link>
              <br />
              <span className="mt-5 text-start">21 Dec 2017</span>
            </li>
            <li className="pt-5">
              <i className="fa-brands fa-twitter pe-2"></i>
              @colorlib
              <p>
                Activello is a good option. It has a slider built into that
                displays the featured image in the slider.
              </p>
              <Link to="#">https://buff.ly/2zaSfAQ</Link>
              <br />
              <span className="mt-5 text-start">21 Dec 2017</span>
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-6">
          <h4 className="pb-3">Gallery</h4>
          <div className="gallery-collection">
            <Link to="#">
              <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="" />
            </Link>
            <Link to="#">
            <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="" />
            </Link>
            <Link to="#">
            <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="" />
            </Link>
            <Link to="#">
            <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="" />
            </Link>
            <Link to="#">
            <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="" />
            </Link>
            <Link to="#">
            <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="" />
            </Link>
            <Link to="#">
            <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="" />
            </Link>
            <Link to="#">
            <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="" />
            </Link>
            <Link to="#">
            <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="" />
            </Link>
            <Link to="#">
            <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="" />
            </Link>
            <Link to="#">
            <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="" />
            </Link>
            <Link to="#">
            <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer