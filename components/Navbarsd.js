import React, { useState } from 'react'
import { CgProfile} from 'react-icons/cg';
import {BsFillMoonStarsFill,BsSun} from 'react-icons/bs';
import {FiPower} from 'react-icons/fi';
import Nastyle from '../styles/Navstyle.module.css';
import logo from '../public/images/logo1.jpg';
import logoLight from '../public/images/imagelight.jpg';
import Image from 'next/image';
import Link from 'next/link';
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
    <div className={`fixed z-30 navbar bg-base-100  ${currentTheme==='dark'?'bg-black text-white':''} ${Nastyle.mainNavbar}`}>
    <div className={`navbar-start ${Nastyle.navStart}`}>
      <div className={`${Nastyle.Drop}`}>
        <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={showDrop}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
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
         
          <div onClick={showbutton}>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ml-2">
         <CgProfile className={` ${Nastyle.avater}`}></CgProfile>
        </div>
      </label>
    {show?  <ul tabIndex={0} className={`menu menu-compact  p-2 shadow    ${currentTheme==='dark'?'bg-transparent text-white':''}`}>
        <li><a><FiPower></FiPower> Logout</a></li>
      </ul>:''}
    </div>
        </ul>:''}
      </div>
      <a className={`btn btn-ghost normal-case text-xl ${Nastyle.Btn}`}>
        
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
    <div className={`navbar-end ${Nastyle.navEnd}`}>
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    {currentTheme==='dark' ? ( <button className="bg-black-700 hover:bg-black rounded-md  p-4" onClick={handlelight}>
    <BsSun></BsSun>
  </button>):(<button className="bg-white z-50 rounded-md  p-4 hover:bg-gray-300" onClick={handleDark}>
  <BsFillMoonStarsFill></BsFillMoonStarsFill>
  </button>) }
  
      <a className={`${Nastyle.subButton}`}>subscribe now</a>
      <div onClick={showbutton}>
      <label tabIndex={0} className={`btn btn-ghost btn-circle avatar ${Nastyle.labelColor}`}>
        <div className="w-10 rounded-full">
         <CgProfile className={Nastyle.avater}></CgProfile>
        </div>
      </label>
     {show? <ul tabIndex={0} className={`menu menu-compact dropdown-content  p-2 shadow bg-base-100 rounded-box w-42  ${currentTheme==='dark'?'bg-black text-white':''} ${Nastyle.dropButton}`}>
        <li><a><FiPower></FiPower> Logout</a></li>
      </ul>:''}
    </div>
  </div>
    
  </div>
  )
}
