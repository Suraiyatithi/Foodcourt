
import React from 'react';
import imgbg from '../../assets/Rectangle400.png';
import bg2 from '../../assets/Vector 1.png'
import img from '../../assets/Screenshot_669 2.png'
import '../Primary/Primary.css'

const Header = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2">
      <div className="lg:order-2">
      <div style={{ backgroundImage: `url(${imgbg})` }} className="bg relative">

          <div className="absolute top-0 right-0 p-4"> 
            <button className='btn rounded-full background'>Get In Touch</button>
          </div>
          <img src={bg2} className='img' alt="" />
         </div>
        </div>
        <div className="text-left relative"> 
        <div className="lg:order-1">
          <img className='' src={img} alt="" />
          <h1 className='color2 text-6xl Bold mt-24 leading-relaxed font-bold text-left mb-8'>Discover the <br /> <span className='color'>Best</span> Food <br /> and Drinks</h1>
          <p className='mb-8 '>Naturally made healthcare products for the <br /> better care and support of your body</p>
          <button className='btn background text-white rounded-full'>Explore Now!</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;


