
import React from 'react'
import img1 from '../public/images/banner/banner1.jpg';
import img2 from '../public/images/banner/banner2.jpg';
import img3 from '../public/images/banner/banner3.jpg';
import img4 from '../public/images/banner/banner4.jpg';
import Image from 'next/image';
import Slider from 'react-slick';
import bann from '../styles/banner.module.css';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",position:'absloute',right:'30px',zIndex:20}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
       style={{ ...style, display: "block",position:'absloute',left:'30px',zIndex:20}}
      onClick={onClick}
    />
  );
}
export default function Banner() { 

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [

    {
      breakpoint: 880,
      settings: {
     dots:false
      }
    },
    {
      breakpoint: 480,
      settings: {
       
      }
    }
  ]
};
  return (
  <div>
   <Slider {...settings} className='banner' style={{paddingTop:'64px'}}>
    <div>
      <Image src={img1} className='w-full' alt='img1'></Image>
    </div>
    <div>
      <Image src={img2} className='w-full' alt='img1'></Image>
    </div>
    <div>
      <Image src={img3} className='w-full' alt='img1'></Image>
    </div>
    <div>
      <Image src={img4} className='w-full' alt='img1'></Image>
    </div>
   </Slider>
  </div>
  

  )
}
