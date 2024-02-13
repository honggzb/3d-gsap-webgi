import React from 'react'
import Ipnone from '../assets/images/iphone-14.jpg'
import HoldingIphone from '../assets/images/iphone-hand.png';

const Jumbtron = () => {

  const handleLearnMore = () => {
    const element = document.querySelector('.sound-section');
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='jumbotron-section wrapper'>
      <h2 className="title">New</h2>
      <img className='logo' src={Ipnone} alt="iPhone 14 pro" />
      <p className="text">Big and bigger.</p>
      <span className="description">
          From $41.62/mo. for 24 mo. or $999 before trade-in
      </span>
      <ul className="links">
         <li><button className="button">Buy</button></li>
         <li><a className="link" onClick={handleLearnMore}>Learn more</a></li>
      </ul>
      <img src={HoldingIphone} alt="iphone" className="iphone-img" />
    </div>
  )
}

export default Jumbtron
