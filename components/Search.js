import React from 'react'
import img1 from '../public/images/search/seach1.jpg';
import img2 from '../public/images/search/search2.jpg';
import img3 from '../public/images/search/search3.jpg';
import img4 from '../public/images/search/search4.jpg';
import img5 from '../public/images/search/search5.jpg';
import img6 from '../public/images/search/search6.jpg';
import img7 from '../public/images/search/search7.jpg';
import img8 from '../public/images/search/search8.jpg';
import img9 from '../public/images/search/search9.jpg';
import Image from 'next/image';
export default function Search({currentTheme}) {
    const serachb=[
        {id:1,ima:img1},
        {id:2,ima:img2},
        {id:3,ima:img3},
        {id:4,ima:img4},
        {id:5,ima:img5},
        {id:6,ima:img6},
        {id:7,ima:img7},
        {id:8,ima:img8},
        {id:9,ima:img9},
    ]
   
  return (
    <div className='xl:p-[50px 30px] lg:p-[50px 30px] md:p-[50px 30px] sm:p-[0 30px] overflow-y-auto overflow-x-hidden'>
        <div className="search px-[20px] xl:px-[30px] md:px-[30px] sm:px-[30px]">
<form className={`pb-[30px] lg:pt-7 pt-10 sm:pt-10 md:pt-10 border-b  ${currentTheme==='dark'?'border-[#ddd]':'border-[#404040]'}`}>
    <div>
        <input type="text" class="form-control lg:text-[30px] text-[14px] md:pb-3 sm:text-[20px] outline-0  sm:pb-3 inline-block  bg-transparent capitalize w-full" placeholder='search sports,drama or your desire shows' />
        <label htmlFor="my-modal-5" className={`btn btn-lg bg-transparent border-0 lg:hidden  xl:hidden  absolute right-[1%] top-[6%] md:top-[20%]  sm:top-[20%] md:text-[30px] text-[20px] sm:right-[3%] hover:bg-transparent ${currentTheme==='dark'?'text-[#ddd]':'text-black'}`}>✕</label>
        <label htmlFor="my-modal-6" className={`btn hidden lg:block xl:block btn-lg bg-transparent border-0 lg:btn-md absolute lg:top-[20%] lg:right-[4%] xl:right-[4%] xl:top-[20%] lg:text-[30px] hover:bg-transparent ${currentTheme==='dark'?'text-[#ddd]':'text-black'}`}>✕</label>
    </div>
</form>
        </div>
        <div className="contain-fluid md:pt-14 sm:pt-16  lg:pb-8 lg:pt-12 xl:pt-12">
            <div className="grid grid-cols-2 pt-14 gap-y-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6
             xl:grid-col-6 lg:gap-y-6 md:gap-y-8 sm:grid-cols-3 sm:gap-y-8 sm:pb-4 pb-16">
                {serachb.map(sear=><div key={sear.id} className='relative'>
                 
                    <Image src={sear.ima} className='px-[15px] md:w-full'></Image>
                    <span className='absolute uppercase font-bold text-white top-[17px] right-[30px] p-1 bg-gradient-to-r from-[#ff6e01] to-[#f42829]'>premium</span>
                 
                   
  
                </div>)}
<div>
   
</div>
            </div>
        </div>
    </div>
  )
}
