import React from 'react'
import legimg1 from '../../public/images/leagh/l1.jpg';
import legimg2 from '../../public/images/leagh/l2.jpg';
import legimg3 from '../../public/images/leagh/l3.jpg';
import legimg4 from '../../public/images/leagh/l4.jpg';
import { HiChevronRight } from 'react-icons/hi';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import tournaStyle from '../../styles/Touranament.module.css';
 function Leagh() {
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
    <div className={tournaStyle.leaghSection}>
          <div>
           <Link href="#" className={tournaStyle.leaghTitle}>
            la liga <span><HiChevronRight  className='inline'></HiChevronRight>
            </span>
           </Link>
        </div>
        <Slider {...settings}  className={`laligh ${tournaStyle.laligh}`}>
        <div   className={tournaStyle.maindiv}>
            <Image src={legimg1} alt="foot1" className={tournaStyle.imge}></Image>
        </div>
        <div   className={tournaStyle.maindiv}>
            <Image src={legimg2} alt="foot2" className={tournaStyle.imge}></Image>
        </div>
        <div   className={tournaStyle.maindiv}>
            <Image src={legimg3} alt="foot3" className={tournaStyle.imge}></Image>
        </div>
        <div   className={tournaStyle.maindiv}>
            <Image src={legimg4} alt="foot4" className={tournaStyle.imge}></Image>
        </div>
        <div   className={tournaStyle.maindiv}>
            <Image src={legimg1} alt="foot1" className={tournaStyle.imge}></Image>
        </div>
        <div  className={tournaStyle.maindiv}>
            <Image src={legimg2} alt="foot2" className={tournaStyle.imge}></Image>
        </div>
        </Slider>
    </div>
  )
}
export default Leagh;