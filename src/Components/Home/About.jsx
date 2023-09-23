import React from 'react';
import img from '../../assets/girl (lp).png'

const About = () => {
    return (
   <div  style={{background:"#F8F8F8"}} className="">
         <div className='mt-24 lg:ml-24 lg:mr-24'>
           <div className="grid lg:grid-cols-2 lg:gap-24 ">
            <div className="text-left">
                <img className='' src={img} alt="" />
            </div>
            <div className=" text-left  align-middle lg:pt-32">
                <h1 className='text-left color2 text-5xl font-bold mb-6'>About Us</h1>
                <p className='text-left mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente, dolorem in rerum quae nesciunt,
                     tempora atque similique laboriosam 
                    corporis nulla doloribus error magnam sed fuga veritatis praesentium quis dolore!</p>
                    <button className='btn background rounded-full text-white '>Read More</button>
            </div>
            </div> 
        </div>
   </div>
    );
};

export default About;