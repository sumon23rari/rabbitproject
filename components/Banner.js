import React from 'react'
import img1 from '../public/images/banner/banner1.jpg';
import img2 from '../public/images/banner/banner2.jpg';
import img3 from '../public/images/banner/banner3 .jpg';
import Image from 'next/image';
import Slider from 'react-slick';
import { BsPlayFill,BsPlus } from 'react-icons/bs';
import { FiShare2 } from 'react-icons/fi';
import bann from '../styles/banner.module.css';
// import icons
import {BsArrowLeft, BsArrowRight } from 'react-icons/bs';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
function SampleNextArrow({onClick}) {

  return (
    <div className='arrow arrow-right' onClick={onClick}>
      <BsArrowRight className='arrowRl'></BsArrowRight>
    </div>
  );
}

function SamplePrevArrow({onClick}) {
  return (
  <div className='arrow arrow-left' onClick={onClick}>
    <BsArrowLeft className='arrowRl'></BsArrowLeft>
    </div>
  );
}
export default function Banner({currentTheme}) { 

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
      breakpoint: 1070,
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
   <Slider {...settings} className={`banner ${currentTheme==='dark'?'bg-[#252525]':'bg-[#e8e8ea]'}`} style={{paddingTop:'64px',background:'',}}>
    {/* =============banner 01 item====== */}
    <div>

      <Image src={img1} className=' h-full' alt='img1'>

      </Image>
      <div className={`${bann.buttonGroup}`}>
  <button className={`${bann.btn} ${bann.watchButton}`}><BsPlayFill className="inline"> </BsPlayFill> watch now</button>  <button className={`${bann.btn} ${bann.shareButton}`}><FiShare2></FiShare2></button>
  </div>
    </div>
       {/* =============banner 02 item====== */}
    <div>
      <Image src={img2} className='h-full' alt='img1'></Image>
      <div className={`${bann.buttonGroup}`}>
  <button className={`${bann.btn} ${bann.watchButton}`}><BsPlayFill className="inline"> </BsPlayFill> watch now</button>  <button className={`${bann.btn} ${bann.shareButton}`}><FiShare2></FiShare2></button>
  </div>
    </div>
   
  {/* ==========banner 03 part=========== */}
    <div>
      <Image src={img3} className='h-full' alt='img1'></Image>
      <div className={`${bann.buttonGroup}`}>
  <button className={`${bann.btn} ${bann.watchButton}`}><BsPlayFill className="inline"> </BsPlayFill> watch now</button>  <button className={`${bann.btn} ${bann.shareButton}`}><FiShare2></FiShare2></button>
  </div>
    </div>
    {/* ===========last banner item */}
    <div>
      <Image src={img1} className='h-full' alt='img1'></Image>
      <div className={`${bann.buttonGroup}`}>
  <button className={`${bann.btn} ${bann.watchButton}`}><BsPlayFill className="inline"> </BsPlayFill> watch now</button> <button className= {`${bann.btn} ${bann.watchlist}`}><BsPlus className='inline'></BsPlus> <span>add to watch List</span></button> <button className={`${bann.btn} ${bann.shareButton}`}><FiShare2></FiShare2></button>
  </div>
    </div>
   </Slider>
  )
}
