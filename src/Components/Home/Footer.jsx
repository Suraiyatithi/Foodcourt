import React from 'react';
import img from '../../assets/Screenshot_669 2.png'
import { FaBeer, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../Primary/Primary.css'

const Footer = () => {
    return (
        <div style={{background:"#F8F8F8"}} className='p-24 mt-24'>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                <div className="mb-6">
                    <img src={img} alt="" />
                </div>
                <div className="mb-6">
                    <h1 className='text-3xl color2 font-bold'>Contact Us</h1>
                    <p className='leading-relaxed mt-4 mb-4'>FoodCOurt Private Ltd.5/1,Magalton Road,Partron Gate near YTM Market,Bihari-12337</p>
                    <p>foodcourt@gmail.com</p>
                    <p className='mt-4'>(904)443-0343</p>
                </div>
                <div className="leading-loose mb-6">
                    <h1 className='text-3xl color2 font-bold'>More</h1>
                    <p>About Us</p>
                    <p>Products</p>
                    <p>Career</p>
                    <p>Contact Us</p>
                </div>
                <div className="leading-loose mb-6">
                    <h1 className='text-3xl color2 font-bold'>Social Links</h1>
                  
                    <p className='flex text-center ml-24 text-xl mt-12 mb-12'><FaInstagram className='color2 m-2'></FaInstagram>
                    <FaTwitter className='color2 m-2'></FaTwitter>
                    <FaFacebook className='color2 m-2'></FaFacebook>
                    </p>
                
                    <p className='text-left'>&copy;Foodcourt2023</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;