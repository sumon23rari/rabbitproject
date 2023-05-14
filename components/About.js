import React from 'react'
import aboutStyle from '../styles/About.module.css';
import Image from 'next/image';
import aboutpic from '../public/images/about.jpg';
 function About() {
  return (
    <div className='pt-[120px] pb-[80px] bg-[#1a1a1a]'>
       <div className='container lg:max-w-[1140px] md:max-w-[720px] mx-auto px-[15px]'>
        <div className="aboutArea">
            <div className={`px-[15px] flex w-full flex-row-reverse  items-center ${aboutStyle.mainbar}`}>
<div className={`px-[15px]  text-[#fff]  lg:w-1/2 w-full  ${aboutStyle.aboutxt}`}>
        <div className="mb-[15px]">
            <span className='uppercase font-semibold mb-[10px] p-[7px] text-[11px] rounded-[5px] bg-[#16273f] inline-block'>about</span>
            <h2 className={aboutStyle.secTitle}>We Tackle Business Issues With Innovation</h2>
            <h2 className='lg:text-[35px] xl:text-[35px] text-left capitalize font-semibold text-[24px] sm:text-[28px] mb-[10px]'>text headline</h2>
            <p className='mb-[15px] leading-[27px] text-[#9899a3]'>One of the best innovation stories I’ve ever heard came to me from a senior executive at a leading tech firm. Apparently, his company had won a million-dollar contract to design a sensor that could detect pollutants at very small concentrations underwater. It was an unusually complex problem, so the firm set up a team of crack microchip designers, and they started putting their heads together.</p>
            <p className='mb-[15px] leading-[27px] text-[#9899a3]'>
            About 45 minutes into their first working session, the marine biologist assigned to their team walked in with a bag of clams and set them on the table. Seeing the confused looks of the chip designers, he explained that clams can detect pollutants at just a few parts per million, and when that happens, they open their shells.
            </p>
           
           
            <p className='leading-[27px] text-[#9899a3] z-40'>As it turned out, they didn’t really need a fancy chip to detect pollutants — just a simple one that could alert the system to clams opening their shells. “They saved $999,000 and ate the clams for dinner,” the executive told me.</p>
        </div>
    </div>
    <div className='px-[15px] text-center text-[#fff] lg:w-1/2 w-full'>
        <div className={`xl:max-w-[85%] max-w-full ${aboutStyle.aboutround}`}>
            <Image src={aboutpic} className='w-full' alt="aboutImg"></Image>
        </div>
    </div>
            </div>
        </div>
       </div>
    </div>
  )
}
export default About;