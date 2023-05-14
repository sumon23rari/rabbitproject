import React from 'react';
import img1 from '../../public/images/tornament/image1.jpg';
import img2 from '../../public/images/tornament/imaget2.jpg';
import img3 from '../../public/images/tornament/imaget3.jpg';
import img4 from '../../public/images/tornament/imageto1.jpg';
import img5 from '../../public/images/tornament/imageto2.jpg';
import img6 from '../../public/images/tornament/imageto3.jpg';
import img7 from '../../public/images/tornament/imageto4.jpg';
import { HiChevronRight } from 'react-icons/hi';
import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image';
import tournaStyle from '../../styles/Touranament.module.css';
function Tournament() {
    var settings = {
        dots: false,
         infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              autoplay:true,
            }
          }
        ]
      };
  return (
    <div  className={tournaStyle.tourSection}>
         <div className='text-center'>
           <Link href="#" className={`capitalize text-2xl font-bold inline-block ${tournaStyle.tourTitle}`}>
            India tours of bangladesh <span><HiChevronRight  className='inline'></HiChevronRight>
            </span>
           </Link>
        </div>
        <Slider {...settings} className={` tournaItem ${tournaStyle.tournaItem}`}>
        <div  className={tournaStyle.maindiv}>
        <Image src={img1} alt="recent1" className={tournaStyle.imge}></Image>
        <div className={tournaStyle.primButton}>premum</div>
    </div>
    <div  className={tournaStyle.maindiv}>
        <Image src={img2} alt="recent2" className={tournaStyle.imge}></Image>
        <div className={tournaStyle.primButton}>premum</div>
    </div>
    <div  className={tournaStyle.maindiv}>
        <Image src={img3} alt="recent3" className={tournaStyle.imge}></Image>
        <div className={tournaStyle.primButton}>premum</div>
    </div>
    <div className={tournaStyle.maindiv}>
        <Image src={img4} alt="recent4" className={tournaStyle.imge}></Image>
        <div className={tournaStyle.primButton}>premum</div>
    </div>
    <div  className={tournaStyle.maindiv}>
        <Image src={img5} alt="recent5" className={tournaStyle.imge}></Image>
        <div className={tournaStyle.primButton}>premum</div>
    </div>
    <div  className={tournaStyle.maindiv}>
        <Image src={img6} alt="recent6" className={tournaStyle.imge}></Image>
        <div className={tournaStyle.primButton}>premum</div>
    </div>
    <div className={tournaStyle.maindiv}>
        <Image src={img7} alt="recent7" className={tournaStyle.imge}></Image>
        <div className={tournaStyle.primButton}>premum</div>
    </div>
        </Slider>

    </div>
  )
}
export default Tournament;