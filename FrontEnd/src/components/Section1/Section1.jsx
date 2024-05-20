import React from 'react'
import './Section1.css'
const Section1 = () => {
  return (
    <section className='section1'>
        <div className="container">
            <div className="sect1Left">
                <i className='salam'>Italian Restaurant</i>
                <h2>WELCOME</h2>
                <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
                <a href="#">OUR STORY <i class="fa-solid fa-arrow-right "></i></a>
            </div>
            <div className='sect1Right'>
                <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Section1