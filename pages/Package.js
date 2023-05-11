import Navbarsd from '@/components/Navbarsd'
import React, { useState } from 'react';
import Link from 'next/link';
import muk from '../public/images/mukut.jpg';
import dataStyle from '../styles/Price.module.css';
import {TiTick} from 'react-icons/ti';
import Footer from '@/components/Footer';
import Image from 'next/image';
export default function Package() {
let [choice,setchoice]=useState('month');
  return (
    <div>
      <Navbarsd></Navbarsd>
      <div className={`xl:pt-[120px] lg:pt-[120px] lg:px-[15px] xl:px-[15px] ${dataStyle.priceContainer}`}>
        <div className='lg:max-w-[1140px] xl:max-w-[1280px] lg:mx-auto xl:container-xl xl:mx-auto'>
          <div className="price-section lg:pb-[50px] xl:m-[50px auto] lg:m-[50px auto] lg:max-w-[880px] mx-auto">
    <div className={`${dataStyle.priceBox}`}>
      <div className="grid lg:grid-cols-2 xl:grid-cols-2">
        {/* ==============pricesection======================== */}
   
        <div className="priceSection lg:p-[40px] xl:p-[40px] bg-[#252525] text-white">
    <div>
      {/* ===========1st price====================== */}
      <div className='w-full lg:mb-[20px] xl:mb-[20px]'>
        <label className='w-full mb-2' for="55">
          <input type="radio" name="package" className='lg:hidden' id="55" value="L" />
          <div className={`${dataStyle.dataSection} ${choice==='month'?dataStyle.dataBg:''}`}>
            <div className='grid grid-cols-2'>
             <div className='text-left'>
             <h4 className='text-[14px] font-bold capitalize'>monthly Pack</h4>
             <p className='text-[12px] text-[#989898] font-medium'>renewable</p>
             </div>
             <div className='text-right'>
             <div className={`${dataStyle.planMain}`}>
                <h4 className='font-bold text-[14px] uppercase'>BDT 99</h4>
                <p className='text-[#989898] text-[12px] capitilize font-medium'>for 1 months</p>
              </div>
              <div className={`${dataStyle.palinCheck}`}>
               <input type="radio" name="price" value="month" onChange={e=>setchoice(e.target.value)}  className={`${choice==='month'?dataStyle.datain:''} cursor-pointer`} />
              </div>
             </div>
            </div>
          </div>
          <div className={`${dataStyle.dataBottom}`}>
            <span></span> <span className={`${dataStyle.bottomtxt}`}>
            Your Subscription will be renew on Jun 10, 2023
            </span>
          </div>
        </label>
      </div>
       {/* ===========1st price====================== */}
       {/* ===========2st price====================== */}
      <div className='w-full lg:mb-[20px] xl:mb-[20px]'>
        <label className='w-full mb-2' for="55">
          <input type="radio" name="package"  className='lg:hidden' id="55" value="L" />
          <div className={`${dataStyle.dataSection} ${choice==='daily'?dataStyle.dataBg:''}`}>
            <div className='grid grid-cols-2'>
             <div className='text-left'>
             <h4 className='text-[14px] font-bold'>Daily Pack</h4>
             <p className='text-[12px] text-[#989898] font-medium'>renewable</p>
             </div>
             <div className='text-right'>
             <div className={`${dataStyle.planMain}`}>
                <h4 className='font-bold text-[14px] uppercase'>BDT 20</h4>
                <p className='text-[#989898] text-[12px] font-medium'>for 24 hours</p>
              </div>
              <div className={`${dataStyle.palinCheck}`}>
               <input type="radio" name="price" value="daily" className={`${choice==='daily'?dataStyle.datain:''} cursor-pointer`} onChange={e=>setchoice(e.target.value)}/>
              </div>
             </div>
            </div>
          </div>
          <div className={`${dataStyle.dataBottom}`}>
            <span></span> <span className={`${dataStyle.bottomtxt}`}>
            Your Subscription will be renew on Jun 10, 2023
            </span>
          </div>
        </label>
      </div>
       {/* ===========2st price====================== */}
        {/* ===========3st price====================== */}
        <div className='w-full lg:mb-[20px] xl:mb-[20px]'>
        <label className='w-full mb-2' for="55">
          <input type="radio" name="package"  className='lg:hidden' id="55" value="L" />
          <div className={`${dataStyle.dataSection} ${choice==='half'?dataStyle.dataBg:''}`}>
            <div className='grid grid-cols-2'>
             <div className='text-left'>
             <h4 className='text-[14px] font-bold'>Half Yearly Plan (+Android TV)</h4>
             <p className='text-[12px] text-[#989898] font-medium'>renewable</p>
             </div>
             <div className='text-right'>
              <div className={`${dataStyle.planMain}`}>
                <h4 className='font-bold text-[14px] uppercase'>BDT 499</h4>
                <p className='text-[#989898] text-[12px] font-medium'>for 6 months</p>
              </div>
              <div className={`${dataStyle.palinCheck}`}>
               <input type="radio" name="price" value="half" className={`${choice==='half'?dataStyle.datain:''}cursor-pointer`}  onChange={e=>setchoice(e.target.value)} />
              </div>
             </div>
            </div>
          </div>
          <div className={`${dataStyle.dataBottom}`}>
            <span></span> <span className={`${dataStyle.bottomtxt}`}>
            Your Subscription will be renew on Jun 10, 2023
            </span>
          </div>
        </label>
      </div>
         {/* ===========3st price====================== */}
    </div>
    <Link href={"#"} className={`${dataStyle.readeam}`}>Have a Redeem Code?
</Link>
<div className="bootomButton w-full">
  <button className={`${dataStyle.button}`}>continue</button>
  <span className={`${dataStyle.notes}`}>Price inclusive of VAT, SD & SC</span> <br />
  <span className={`${dataStyle.notes}`}>Check our country wise content distribution list from <br />
    <Link href={'/FaqPage'} className={`${dataStyle.distribu}`}>Distribution</Link> &nbsp; page
  </span>
</div>
        </div>
             {/* ==============pricesection======================== */}
        {/* ==========priceDescription================================= */}
        <div className={`${dataStyle.decription} lg:p-[40px] xl:p-[40px]  text-white`}>
    <h4 className='font-bold text-[18px] mb-[20px]'>Enjoy Premium Now!</h4>
    <div className='ml-[20px]'>
      <ul>
        <li className='text-[14px] mb-[15px]'> <TiTick className={`${dataStyle.svbIcon}`}></TiTick> <b>Validity 30 Days</b></li>
        <li className='text-[14px] mb-[15px]'> <TiTick className={`${dataStyle.svbIcon}`}></TiTick> <b>Validity 30 Days</b></li>
        <li className='text-[14px] mb-[15px]'> <TiTick className={`${dataStyle.svbIcon}`}></TiTick> <b>Validity 30 Days</b></li>
        <li className='text-[14px] mb-[15px]'> <TiTick className={`${dataStyle.svbIcon}`}></TiTick> <b>Validity 30 Days</b></li>
        <li className='text-[14px] mb-[15px]'> <TiTick className={`${dataStyle.svbIcon}`}></TiTick><b>La Liga Santander</b></li>
        <li className='text-[14px] mb-[15px]'> <TiTick className={`${dataStyle.svbIcon}`}></TiTick><b>English Premier League</b></li>
        <li className='text-[14px] mb-[15px]'> <TiTick className={`${dataStyle.svbIcon}`}></TiTick><b>Serie A TIM</b></li>
        <li className='text-[14px] mb-[15px]'> <TiTick className={`${dataStyle.svbIcon}`}></TiTick><b>Ligue 1 Uber Eats</b></li>
        <li className='text-[14px] mb-[15px]'> <TiTick className={`${dataStyle.svbIcon}`}></TiTick>All Bangladesh Cricket Home Series</li>
        <li className='text-[14px] mb-[15px]'> <TiTick className={`${dataStyle.svbIcon}`}></TiTick>Unlimited Streaming</li>
        <li className='text-[14px] mb-[15px]'> <TiTick className={`${dataStyle.svbIcon}`}></TiTick>1 Simultaneous Stream</li>
        <li className='text-[14px] mb-[15px]'> <TiTick className={`${dataStyle.svbIcon}`}></TiTick>1-Device Login</li>
      </ul>
    </div>
        </div>
        {/* ==========priceDescription================================= */}
      </div>
      <div className={`${dataStyle.couwnTop}`}>
      <Image src={muk}></Image>
    </div>
    </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
