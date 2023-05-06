import Image from 'next/image';
import Link from 'next/link';
import cricket from '../public/images/cricket.jpg';
import football from '../public/images/football.jpg';
import cataStyle from  '../styles/Catgory.module.css';
import React from 'react'

 function Catagory() {
  return (
    <div className={cataStyle.mainDiv}>
        <div className="main flex justify-center gap-4 lg:gap-8">
         <div className={`text-center p-12 rounded-lg bg-neutral border-orange-700  hover:border-2 ${cataStyle.part1}`}>
                <Link href="#">
                    <Image src={cricket} alt="cricket"></Image>
                    <h5 className='pt-4 text-white'>cricket</h5>
                </Link>
            </div>
         <div className={`text-center p-12 rounded-lg bg-neutral border-orange-700  hover:border-2 ${cataStyle.part1}`}>
                <Link href="#">
                    <Image src={football} alt="cricket"></Image>
                    <h5 className='pt-4 text-white'>football</h5>
                </Link>
            </div> 
            <div className={`text-center p-12 rounded-lg bg-neutral border-orange-700  hover:border-2 ${cataStyle.part1}`}>
                <Link href="#">
                    <Image src={cricket} alt="cricket"></Image>
                    <h5 className='pt-4 text-white'>leagh</h5>
                </Link>
            </div>
        </div>
    </div>
  )
}
export default Catagory;