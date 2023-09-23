
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
import '../Primary/Primary.css'

const Artical = () => {
    const swiperRef = useRef(null);
    const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(false);
  
    useEffect(() => {
      const swiper = swiperRef.current && swiperRef.current.swiper;
  
      if (swiper) {
        // Listen to the "slideChange" event to determine whether to show the previous button
        swiper.on('slideChange', () => {
          setIsPrevButtonVisible(swiper.activeIndex > 0);
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
        <div>
              <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        pagination={false}
        modules={[Keyboard, Scrollbar, Navigation]}
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
       <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
   <div className="p-6">
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
   <div className="p-6">
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
   <div className="p-6">
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
</div>
       </SwiperSlide>
       <SwiperSlide>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
   <div className="p-6">
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
   <div className="p-6">
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
   <div className="p-6">
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
</div>
       </SwiperSlide>
      </Swiper>
      
   <div className="mx-auto text-center items-center flex">
     
     <div className="">
             <button style={{background:"pink"}} data-aos="fade-left " className="text-3xl border-2 border--slate-300" onClick={handlePrev}>
              &lt;
            </button>
            </div>
            <div className="">
          <button style={{background:"pink"}} data-aos="fade-right " className="text-3xl border-2 border--slate-300" onClick={handleNext}>
         &gt;
          </button>
          </div>
     </div>
     </div>
    
     
    );
};

export default Artical;