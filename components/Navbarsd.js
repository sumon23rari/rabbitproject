import React, { useState } from 'react'
import { CgProfile} from 'react-icons/cg';
import {BsFillMoonStarsFill,BsSun} from 'react-icons/bs';
import {RxMagnifyingGlass} from 'react-icons/rx';
import {FiPower} from 'react-icons/fi';
import Nastyle from '../styles/Navstyle.module.css';
import logo from '../public/images/logo1.jpg';
import logoLight from '../public/images/imagelight.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Search from './Search';
export default function Navbarsd({handleDark,handlelight,currentTheme}) {
  const [show,setShow]=useState(false);
  const [show1,setShow1]=useState(false);
  const showDrop=()=>{
    setShow1(!show1)
  }
 
  const showbutton=()=>{
    setShow(!show)
  }
  return (
    <div className={`fixed z-30 navbar bg-base-100  ${currentTheme==='dark'?'bg-black text-white':'bg-[rgba(255,255,255,.68]'} ${Nastyle.mainNavbar}`}>
    <div className={`navbar-start ${Nastyle.navStart}`}>
      <div className={`${Nastyle.Drop}`}>
        <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={showDrop}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <span className='lg:hidden'>
        {show1? <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-2 p-2 pb-4 shadow bg-base-100  w-screen ${Nastyle.dropContent}`}>
          <li><Link href='/'>Home</Link></li>
          <li tabIndex={0}>
            <Link href='/LiveScore' className="justify-between">
            LiveScorese
      
            </Link>
           
          </li>
          <li><Link  href="/Leages">leages</Link></li>
          <li className={Nastyle.darkIcon}>
          {currentTheme==='dark' ? ( <button className="bg-transparent hover:bg-black rounded-md  p-4" onClick={handlelight}>
    <BsSun></BsSun>
  </button>):(<button className="bg-transparent  rounded-md  p-4 hover:bg-gray-300" onClick={handleDark}>
  <BsFillMoonStarsFill></BsFillMoonStarsFill>
  </button>) }
          </li>
         <li>
         <label htmlFor="my-modal-5" className={`btn justify-start ${currentTheme==='dark'?'bg-transparent text-white hover:bg-transparent':'bg-transparent text-white border-none hover:bg-transparent'}`}> <RxMagnifyingGlass className='h-5 w-5 text-left float-left'></RxMagnifyingGlass></label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className={`modal rounded-none md:p-0 sm:p-0 p-0`}>
  <div className={`modal-box sm:px-0 p-0 max-w-full max-h-full w-full h-full rounded-none ${currentTheme==='dark'?'bg-[#404040!important] z-50':'bg-[#d6d6d6!important] z-50'}`}>
 
 <Search currentTheme={currentTheme}></Search>
  
  </div>
</div>
         </li>
         <li><a className={`${Nastyle.subButton}`} href='/Package'>subscribe now</a></li>
         
          <div onClick={showbutton}>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ml-2">
         <CgProfile className={` ${Nastyle.avater}`}></CgProfile>
        </div>
      </label>
    {show?  <ul tabIndex={0} className={`menu menu-compact  p-2 shadow    ${currentTheme==='dark'?'bg-transparent text-white':''}`}>
        <li className={Nastyle.userIcon}><a><FiPower></FiPower> Logout</a></li>
      </ul>:''}
    </div>
        </ul>:''}
        </span>
      
      </div>
      <a className={`btn btn-ghost normal-case text-xl ${Nastyle.Btn}`} href='/'>
        
        {currentTheme==='dark' ?<Image src={logo}></Image>:<Image src={logoLight}></Image>}
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li className={Nastyle.navLink}>
       <Link href='/'>home</Link>
          </li>
        <li  className={Nastyle.navLink} tabIndex={0}>
          
          <Link href='/LiveScore'>livescore1</Link>
        </li>
        <li className={Nastyle.navLink}>
          <Link href="/Leages">leages</Link>
        </li>
        
      </ul>
    </div>

    {/*===================large device part======================== */}
    <div className={`navbar-end ${Nastyle.navEnd}`}>
    
    <label htmlFor="my-modal-6" className={`btn ${currentTheme==='dark'?'bg-transparent text-white hover:bg-transparent':'bg-transparent text-black border-none hover:bg-transparent'}`}> <RxMagnifyingGlass className='h-5 w-5'></RxMagnifyingGlass></label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className={`modal rounded-none`}>
  <div className={`modal-box max-w-full max-h-full w-full h-full rounded-none ${currentTheme==='dark'?'bg-[#404040!important] z-50':'bg-[#d6d6d6!important] z-50'}`}>
 
 <Search currentTheme={currentTheme}></Search>
  
  </div>
</div>
    {currentTheme==='dark' ? ( <button className="bg-black-700 hover:bg-black rounded-md  p-4" onClick={handlelight}>
    <BsSun></BsSun>
  </button>):(<button className="bg-[#ddd] z-50 rounded-md  p-4" onClick={handleDark}>
  <BsFillMoonStarsFill></BsFillMoonStarsFill>
  </button>) }
  
      <a className={`${Nastyle.subButton}`} href='/Package'>subscribe now</a>
      <div onClick={showbutton}>
      <label tabIndex={0} className={`btn btn-ghost btn-circle avatar ${Nastyle.labelColor}`}>
        <div className="w-10 rounded-full">
         <CgProfile className={Nastyle.avater}></CgProfile>
        </div>
      </label>
     {show? <ul tabIndex={0} className={`menu menu-compact dropdown-content  p-2 shadow bg-base-100 rounded-box w-42  ${currentTheme==='dark'?'bg-black text-white':''} ${Nastyle.dropButton}`}>
        <li className={Nastyle.userIcon}><a><FiPower></FiPower> Logout</a></li>
      </ul>:''}
    </div>
  </div>
    
  </div>
  )
}
