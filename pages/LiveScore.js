import Image from 'next/image'
import React from 'react'
import img1 from '../public/images/live/live1.jpg';
import img2 from '../public/images/live/live2.jpg';
import img3 from '../public/images/live/live3.jpg';
import img4 from '../public/images/live/live4.jpg';
import img5 from '../public/images/live/live5.jpg';
import Navbarsd from '@/components/Navbarsd';
import Footer from '@/components/Footer';
import liveside from '../styles/LiveScore.module.css';
export default function LiveScore({currentTheme}) {
    const imgNumber=[
        {img:img1},
        {img:img2},
        {img:img3},
        {img:img4},
        {img:img5},
    ]
  return (
    <div className={`${liveside.livebg}`}>
        <Navbarsd></Navbarsd>
        <h3 className={liveside.liveHeading}>Current Live Match</h3>
<div className= {liveside.liveMain}>
    
    
    {
        imgNumber.map(im=><div className={liveside.livemid}>
 <Image src={im.img} alt='mapIng' className={liveside.liveImg}></Image>
        </div>)
    }
<div>
   
</div>
</div>
<Footer></Footer>
    </div>
  )
}
