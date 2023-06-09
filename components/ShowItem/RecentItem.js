import Link from 'next/link';
import React from 'react'
import { HiChevronRight } from 'react-icons/hi';
import recent1 from '../../public/images/recent/recent1.jpg';
import recent2 from '../../public/images/recent/recent2.jpg';
import recent3 from '../../public/images/recent/recent3.jpg';
import recent4 from '../../public/images/recent/recent4.jpg';
import recent5 from '../../public/images/recent/recent5.jpg';
import recent6 from '../../public/images/recent/recent6.jpg';
import recent7 from '../../public/images/recent/recent7.jpg';
import tournaStyle from '../../styles/Touranament.module.css';
import Slider from 'react-slick';
import Image from 'next/image';
 function RecentItem({currentTheme}) {
    var settings = {
        dots: false,
         infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 1,
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
    <div  className={`${currentTheme==='dark'?'bg-[#404040] text-white':'bg-white text-[#404040]'} ${tournaStyle.recentSection}`}>
        <div className='text-center'>
           <Link href="#" className={`capitalize text-2xl font-bold text-center -mt-6 inline-block ${tournaStyle.recentTitle}`}>
            recent <span><HiChevronRight  className='inline text-center'></HiChevronRight>
            </span>
           </Link>
        </div>
<Slider {...settings} className={`${tournaStyle.recentItem} recentItem`}>
    <div className={tournaStyle.maindiv}>
        <Image src={recent1} alt="recent1" className={tournaStyle.imge}></Image>
        <div className={tournaStyle.primButton}>premium</div>
    </div>
    <div className={tournaStyle.maindiv}>
        <Image src={recent2} alt="recent2" className={tournaStyle.imge}></Image>
        <div className={tournaStyle.primButton}>premium</div>
    </div>
    <div className={tournaStyle.maindiv}>
        <Image src={recent3} alt="recent3" className={tournaStyle.imge}></Image>
        <div className={tournaStyle.primButton}>premium</div>
    </div>
    <div className={tournaStyle.maindiv}>
        <Image src={recent4} alt="recent4" className={tournaStyle.imge}></Image>
        <div className={tournaStyle.primButton}>premium</div>
    </div>
    <div className={tournaStyle.maindiv}>
        <Image src={recent5} alt="recent5" className={tournaStyle.imge}></Image>
        <div className={tournaStyle.primButton}>premium</div>
    </div>
    <div className={tournaStyle.maindiv}>
        <Image src={recent6} alt="recent6" className={tournaStyle.imge}></Image>
        <div className={tournaStyle.primButton}>premium</div>
    </div>
    <div className={tournaStyle.maindiv}>
        <Image src={recent7} alt="recent7" className={tournaStyle.imge}></Image>
        <div className={tournaStyle.primButton}>premium</div>
    </div>
</Slider>
    </div>
  )
}
export default RecentItem;