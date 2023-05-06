import Footer from '@/components/Footer'
import Navbarsd from '@/components/Navbarsd'
import Leagh from '@/components/ShowItem/Leagh'
import React from 'react'
import leagStyle from '../styles/LeageStyle.module.css';
export default function Leages() {
  return (
    <div style={{background:'#404040'}}>
        <Navbarsd></Navbarsd>
        <div className={leagStyle.leaghTop}>
        <Leagh></Leagh>
        <Footer></Footer>
        </div>
    </div>
  )
}
