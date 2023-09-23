
import React, { useRef,useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation,  FreeMode, Pagination} from 'swiper/modules';
import img1 from '../../assets/grilled-tomatoes-1-846x846 1 (1).png';
import img5 from '../../assets/grilled-tomatoes-1-846x846 1.png'
import img2 from '../../assets/meal-prep-ideas-846x846 1 (1).png';
import img3 from '../../assets/meal-prep-ideas-846x846 1.png'
import img4 from '../../assets/meal-prep-ideas-846x846 1 (2).png'
import img6 from '../../assets/meal-prep-ideas-846x846 1 (3).png'
import 'swiper/swiper-bundle.css';
import '../Primary/Primary.css'

const Artical = () => {
    const swiperRef = useRef(null);
    const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0); 
  
    // useEffect(() => {
    //   const swiper = swiperRef.current && swiperRef.current.swiper;
  
    //   if (swiper) {
    //     // Listen to the "slideChange" event to determine whether to show the previous button
    //     swiper.on('slideChange', () => {
    //       setIsPrevButtonVisible(swiper.activeIndex > 0);
    //     });
  
    //     // Trigger an initial check to hide the previous button if needed
    //     setIsPrevButtonVisible(swiper.activeIndex > 0);
    //   }
    // }, []);
    useEffect(() => {
        const swiper = swiperRef.current && swiperRef.current.swiper;
    
        if (swiper) {
          // Listen to the "slideChange" event to determine whether to show the previous button
          swiper.on('slideChange', () => {
            setIsPrevButtonVisible(swiper.activeIndex > 0);
            setCurrentSlide(swiper.activeIndex); // Update the current slide state
          });
    
          // Trigger an initial check to hide the previous button if needed
          setIsPrevButtonVisible(swiper.activeIndex > 0);
        }
      }, []);
    
  
    const handleNext = () => {
      try {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideNext();
        }
      } catch (error) {
        console.error('Error in handleNext:', error);
      }
    };
  
    const handlePrev = () => {
      try {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slidePrev();
        }
      } catch (error) {
        console.error('Error in handlePrev:', error);
      }
    };
    return (
        <div className='lg:mt-24 lg:mb-24'>
              <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        pagination={false}
        modules={[Keyboard, Scrollbar, Navigation, FreeMode, Pagination]}
        className="mySwiper relative"
        breakpoints={{
        
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1, 
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
       <SwiperSlide>
       <h1 className='text-5xl font-bold color2 text-left mb-4'>Latest Articles</h1>
       <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
   <div className="p-3">
   <div className="card  bg-base-100  border-2 border-slate-300 ">
  <figure className="px-2 pt-2">
    <img src={img5} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  text-left">
    <h2 className="card-title color2 mb-3">Grill Tomatos at Home</h2>
    <p>You can find your defire food at Home just a minute by a call .
        if you want or you are seeking for food and you 
        are a food lover this is just for you</p>
    <div className="card-actions mt-2">
      <button className="btn rounded-full">Read More</button>
    </div>
  </div>
</div>
   </div>
   <div className="p-3">
   <div className="card  bg-base-100  border-2 border-slate-300 ">
  <figure className="px-2 pt-2">
    <img src={img3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  text-left">
    <h2 className="card-title color2 mb-3">Snacks Fror Travels</h2>
    <p>You can find your defire food at Home just a minute by a call .
        if you want or you are seeking for food and you 
        are a food lover this is just for you</p>
    <div className="card-actions mt-2">
      <button className="btn rounded-full">Read More</button>
    </div>
  </div>
</div>
   </div>
   <div className="p-3">
   <div className="card  bg-base-100  border-2 border-slate-300 ">
  <figure className="px-2 pt-2">
    <img src={img2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  text-left">
    <h2 className="card-title color2 mb-3">Post Workout Recipies</h2>
    <p>You can find your defire food at Home just a minute by a call .
        if you want or you are seeking for food and you 
        are a food lover this is just for you</p>
    <div className="card-actions mt-2">
      <button className="btn rounded-full">Read More</button>
    </div>
  </div>
</div>
   </div>
</div>
       </SwiperSlide>
       <SwiperSlide>
        <h1 className='text-5xl font-bold color2 text-left mb-4'>Latest Articles</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
   <div className="p-3">
   <div className="card  bg-base-100  border-2 border-slate-300 ">
  <figure className="px-2 pt-2">
    <img src={img1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  text-left">
    <h2 className="card-title color2 mb-3">How to Gril Corn</h2>
    <p>You can find your defire food at Home just a minute by a call .
        if you want or you are seeking for food and you 
        are a food lover this is just for you</p>
    <div className="card-actions mt-2">
      <button className="btn rounded-full">Read More</button>
    </div>
  </div>
</div>
   </div>
   <div className="p-3">
   <div className="card  bg-base-100  border-2 border-slate-300 ">
  <figure className="px-2 pt-2">
    <img src={img4} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  text-left">
    <h2 className="card-title color2 mb-3">Cruchwrape Supreme</h2>
    <p>You can find your defire food at Home just a minute by a call .
        if you want or you are seeking for food and you 
        are a food lover this is just for you</p>
    <div className="card-actions mt-2">
      <button className="btn rounded-full">Read More</button>
    </div>
  </div>
</div>
   </div>
   <div className="p-3">
   <div className="card  bg-base-100  border-2 border-slate-300 ">
  <figure className="px-2 pt-2">
    <img src={img6} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  text-left">
    <h2 className="card-title color2 mb-3">Broccoli Cheese Soup</h2>
    <p>You can find your defire food at Home just a minute by a call .
        if you want or you are seeking for food and you 
        are a food lover this is just for you</p>
    <div className="card-actions mt-2">
      <button className="btn rounded-full">Read More</button>
    </div>
  </div>
</div>
   </div>
</div>
       </SwiperSlide>
      </Swiper>
      
  
   
     <div className="mx-auto flex justify-center items-center">
     <div className="flex">
             <button   className="text-xl pl-1 pr-1  border-2 border-slate-300" onClick={handlePrev}>
              &lt;
            </button>
            <div className="mx-auto text-center">
        {currentSlide + 1}/{swiperRef.current && swiperRef.current.swiper ? swiperRef.current.swiper.slides.length : 0}
      </div>
            </div>
           
            <div className="">
          <button className="text-xl pl-1 pr-1 border-2 border-slate-300" onClick={handleNext}>
         &gt;
          </button>
          </div>
        
     </div>
     </div>
    
     
    );
};

export default Artical;