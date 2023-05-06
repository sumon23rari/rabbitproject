import React from 'react'
import {FaArrowRight} from 'react-icons/fa';
import legalButtonStyle from '../styles/LigalButton.module.css';
export default function ({active,setActive}) {
  return (
    <div>
        <div className={legalButtonStyle.nav}>
        <button onClick={()=>setActive('firstElement')}>
           <span className={`${active==='firstElement' && legalButtonStyle.activColor}`}>
             <span className={legalButtonStyle.txt}>terms of use</span>
              <span className={legalButtonStyle.icon}><FaArrowRight></FaArrowRight></span> </span></button>

        <button onClick={()=>setActive('secondElement')}> <span className={`${active==='secondElement' && legalButtonStyle.activColor}`}> <span className={legalButtonStyle.txt}>Privacy Policy</span><span className={legalButtonStyle.icon}><FaArrowRight></FaArrowRight></span></span></button>

        <button onClick={()=>setActive('thirdElement')}> <span className={`${active==='thirdElement' && legalButtonStyle.activColor}`}> <span className={legalButtonStyle.txt}>FAQs</span><span className={legalButtonStyle.icon}><FaArrowRight></FaArrowRight></span></span></button>

        <button onClick={()=>setActive('fourthElement')}> <span className={`${active==='fourthElement' && legalButtonStyle.activColor}`}> <span className={legalButtonStyle.txt}>Refund & Return Policy</span><span className={legalButtonStyle.icon}><FaArrowRight></FaArrowRight></span></span></button>

        <button onClick={()=>setActive('fiveElement')}> <span className={`${active==='fiveElement' && legalButtonStyle.activColor}`}> <span className={legalButtonStyle.txt}>GDPR</span><span className={legalButtonStyle.icon}><FaArrowRight></FaArrowRight></span></span></button>
        
        <button onClick={()=>setActive('sixElement')}> <span className={`${active==='sixElement' && legalButtonStyle.activColor}`}> <span className={legalButtonStyle.txt}>Content Distribution</span><span className={legalButtonStyle.icon}><FaArrowRight></FaArrowRight></span></span></button>
        </div>
    </div>
  )
}
