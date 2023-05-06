import Link from 'next/link';
import React from 'react'
import { HiChevronRight } from 'react-icons/hi';
import Slider from 'react-slick';
import foot1 from '../../public/images/football/f1.jpg';
import foot2 from '../../public/images/football/f2.jpg';
import foot3 from '../../public/images/football/f3.jpg';
import foot4 from '../../public/images/football/f4.jpg';
import Image from 'next/image';
import tournaStyle from '../../styles/Touranament.module.css';
 function Football() {
    var settings = {
        dots: false,
         infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              autoplay:true
            }
          }
        ]
      };
  return (
    <div className={tournaStyle.footSection}>
<div>
           <Link href="#" className={`text-white capitalize text-xl font-bold  inline-block ${tournaStyle.footTitle}`}>
           Football Legends 
<span><HiChevronRight  className='inline'></HiChevronRight>
            </span>
           </Link>
        </div>
        <Slider {...settings} className={`${tournaStyle.football} football`}>
        <div className={tournaStyle.maindiv}>
            <Image src={foot1} alt="foot1" className={tournaStyle.imge}></Image>
        </div>
        <div className={tournaStyle.maindiv}>
            <Image src={foot2} alt="foot2" className={tournaStyle.imge}></Image>
        </div>
        <div className={tournaStyle.maindiv}>
            <Image src={foot3} alt="foot3" className={tournaStyle.imge}></Image>
        </div>
        <div className={tournaStyle.maindiv}>
            <Image src={foot4} alt="foot4" className={tournaStyle.imge}></Image>
        </div>
        <div className={tournaStyle.maindiv}>
            <Image src={foot1} alt="foot1" className={tournaStyle.imge}></Image>
        </div>
        <div className={tournaStyle.maindiv}>
            <Image src={foot2} alt="foot2" className={tournaStyle.imge}></Image>
        </div>
        </Slider>
    </div>
  )
}
export default Football;