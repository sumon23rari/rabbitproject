import Image from 'next/image';
import Link from 'next/link';
import cricket from '../public/images/cricket.jpg';
import football from '../public/images/football.jpg';
import cataStyle from  '../styles/Catgory.module.css';
import React from 'react'

 function Catagory({currentTheme}) {
  return (
    <div className={`${currentTheme==='dark'?'bg-[#252525]':'bg-[#e8e8ea]'} ${cataStyle.mainDiv}`}>
        <div className="main flex justify-center gap-4 lg:gap-4">
         <div className={`text-center px-24 py-5 rounded-lg border-2 hover:border-orange-700 ${currentTheme==='dark'?'bg-[#404040] border-[#404040]':'bg-white border-white'} ${cataStyle.part1}`}>
                <Link href="#">
                    <Image src={cricket} alt="cricket"></Image>
                    <h5 className=' text-white'>cricket</h5>
                </Link>
            </div>
         <div className={`text-center px-24 py-5 rounded-lg border-2 hover:border-orange-700 ${currentTheme==='dark'?'bg-[#404040] border-[#404040]':'bg-white border-white'} ${cataStyle.part1}`}>
                <Link href="#">
                    <Image src={football} alt="cricket"></Image>
                    <h5 className=' text-white'>football</h5>
                </Link>
            </div> 
            <div className={`text-center px-24 py-5 rounded-lg border-2 hover:border-orange-700 ${currentTheme==='dark'?'bg-[#404040] border-[#404040]':'bg-white border-white'} ${cataStyle.part1}`}>
                <Link href="#">
                    <Image src={cricket} alt="cricket"></Image>
                    <h5 className=' text-white'>leagh</h5>
                </Link>
            </div>
        </div>
    </div>
  )
}
export default Catagory;