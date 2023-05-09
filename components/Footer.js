import Image from 'next/image';
import React from 'react'
import google from '../public/images/google1.jpg';
import app from '../public/images/app.jpg';
import logo from '../public/images/logo1.jpg';
import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import footerst from '../styles/Footer.module.css';
import Link from 'next/link';
 function Footer({currentTheme}) {

  return (
    <div>
      <div style={{padding:' 40px  0'}} className={`${currentTheme==='dark'?'bg-[#171717] text-white':'bg-white text-black'}`}>
      <div className={`container mx-auto ${footerst.containerDiv}`}>
    <footer className={` sm:gap-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-[30px] ${footerst.footdiv}`} >

    <div className={`col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1  sm:col-span-1 ${footerst.footdiv1}`}>
      <span className="footer-title opacity-100 mb-6">
        <Image src={logo} alt="logo"></Image>
        </span> 
    <div className='font-semibold  hover:cursor-pointer pb-3 mt-[30px]'>
      <Link href="#" className={footerst.footlink1}>
      <span className='mr-4'><BsTelephone className='inline-block mb-2'></BsTelephone></span>
      <span className=' hover:text-orange-600'>09603008899</span>
      </Link>
    </div>
    <div className='font-semibold  hover:cursor-pointer'>
      <span className='mr-4'><FiMail className='inline-block'></FiMail></span>
      <span className=' hover:text-orange-600'>support@rabbitholebd.com</span>
    </div>
      <div className="flex gap-8  pt-12">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
    </a> 
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
  </div>
    </div> 
    <div className={`md:pl-12 lg:pl-20 ${footerst.footdiv2}`}>
      <span className={footerst.footerTitle}>Browsr</span> 
   <Link href='/' className='capitalize font-medium text-md'>home</Link>
<Link href="/Catagories" className='capitalize font-medium text-md'>highlights</Link>
<Link href="/Catagories" className='capitalize font-medium text-md'>Catagories</Link>
    </div> 
    <div className={`md:pl-6 ${footerst.footdiv3}`}>
      <span  className={footerst.footerTitle}>Quick Links</span> 
      <Link href='/AboutUs' className='capitalize font-medium text-md'>about us</Link>
      <Link href='/FaqPage' className='capitalize font-medium text-md'>faqs</Link>
    </div>
    <div className={`lg:pl-6 ${footerst.footdiv4}`}>
      <span  className={footerst.footerTitle}>Legal</span> 
      <Link href='/FaqPage' className='capitalize font-medium text-md'>Terms of use</Link>
      <Link href='/FaqPage' className='capitalize font-medium text-md'>Privacy policy</Link>
      <Link href='/FaqPage' className='capitalize font-medium text-md'>Refund & Return Policy</Link>
    </div>
    <div className={`md:pl-24 lg:pl-0 ${footerst.footdiv5}`}>
      <span className={footerst.footerTitle}>Download</span> 
     <Image src={google} alt="google"></Image> <br />
     <Image src={app} alt="app"></Image> <br />
    </div>
   
  </footer>
  </div>
  </div>  
  <footer className={`footer footer-center p-4 ${currentTheme==='dark'?'bg-neutral  text-neutral-content':'bg-[#ddd] text-black'}`}>
  <div>
    <p className={footerst.footerCopy}>Copyright © 2023 - All right reserved by  <span className={footerst.footerlast}>ACME Industries Ltd</span> </p>
  </div>
 
</footer>
</div>
  )
}
export default Footer;