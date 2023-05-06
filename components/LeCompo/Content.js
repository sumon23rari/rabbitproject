import React from 'react'
import live1 from '../../public/images/live/live1.jpg';
import live2 from '../../public/images/live/live2.jpg';
import live3 from '../../public/images/live/live3.jpg';
import live4 from '../../public/images/live/live4.jpg';
import live5 from '../../public/images/live/live5.jpg';
import ab1 from '../../public/images/abileable/ab1.jpg';
import ab2 from '../../public/images/abileable/ab2.jpg';
import ab3 from '../../public/images/abileable/ab10.jpg';
import ab4 from '../../public/images/abileable/ab3.jpg';
import ab5 from '../../public/images/abileable/ab4.jpg';
import ab6 from '../../public/images/abileable/ab6.jpg';
import ab7 from '../../public/images/abileable/ab7.jpg';
import ab8 from '../../public/images/abileable/ab8.jpg';
import ab9 from '../../public/images/abileable/ab9.jpg';
import ab10 from '../../public/images/abileable/ab10.jpg';
import Image from 'next/image';
import contentStyle from '../../styles/Content.module.css'
export default function Content() {
    const liveImg=[
        {id:1,img:live1},
        {id:2,img:live2},
        {id:3,img:live3},
        {id:4,img:live4},
        {id:5,img:live5}
    ]
    const abilableImg=[
        {id:1,ima:ab1},
        {id:2,ima:ab2},
        {id:3,ima:ab3},
        {id:4,ima:ab4},
        {id:5,ima:ab5},
        {id:6,ima:ab6},
        {id:7,ima:ab7},
        {id:8,ima:ab8},
        {id:9,ima:ab9},
        {id:10,ima:ab10}
    ]
  return ( 
    <div className={contentStyle.contentMain}>
        <div className=" grid grid-cols-12">
            <div className="col-span-12">
                <div className={contentStyle.contentTitle}>
                    <h4>  Live Channels</h4>
              
                </div>
            </div>
        </div>
        <div className={`lg:pb-8 ${contentStyle.contentImg}`}>
        {
            liveImg.map(liv=><div className={contentStyle.maindiv}>
                <Image src={liv.img} alt="liveImg"  className={contentStyle.image}></Image>
            </div>)
        }
        </div>
        <div className="grid grid-cols-12">
            <div className="col-span-12">
            <div className={contentStyle.contentTitle}>
                <h5>   Available Exiting Contents</h5>
         
                </div>
            </div>
        </div>
        <div className={contentStyle.contentImg}>
            {
                abilableImg.map(abile=><div key={abile.id}  className={contentStyle.maindiv}>
                    <Image src={abile.ima}  alt='contentImg' className={contentStyle.image}></Image>
                </div>)
            }
        </div>
    </div>
  )
}
