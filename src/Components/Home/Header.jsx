import React from 'react';
import imgbg from '../../assets/Rectangle400.png';
import bg2 from '../../assets/Vector 1.png'
import img from '../../assets/Screenshot_669 2.png'
import '../Primary/Primary.css'

const Header = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2">
                <div className="text-left">
                    <img className='' src={img} alt="" />
                    <h1 className='color2 text-6xl Bold mt-24 leading-relaxed font-bold text-left mb-8'>Discover the <br /> <span className='color'>Best</span> Food <br /> and Drinks</h1>
                    <p className='mb-8 '>Naturally made helthcare productuct for the <br /> better care and the support of your body</p>
                    <button className='btn background text-white rounded-full'>Explore Now!</button>

                </div>
                <div style={{backgroundImage:`url(${imgbg})`}} className="bg  ">
                 
                    
                        <div  className="">
                            <img style={{height:"839px"}} src={bg2} className='' alt="" />
                            <button className='btn rounded-full'>Get In Touch</button>
                        </div>

                   

                </div>
            </div>
        </div>
    );
};

export default Header;