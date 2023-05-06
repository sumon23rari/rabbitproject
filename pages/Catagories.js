import Catagory from '@/components/Catagory'
import Footer from '@/components/Footer'
import Navbarsd from '@/components/Navbarsd'
import RecentItem from '@/components/ShowItem/RecentItem'
import Tournament from '@/components/ShowItem/Tournament'
import React from 'react'

export default function Catagories() {
  return (
    <div style={{background:'#404040'}}>
        <Navbarsd></Navbarsd>
        <Catagory style={{paddtingTop:'140px'}}></Catagory>
        <RecentItem></RecentItem>
        <Tournament></Tournament>
        <Footer></Footer>
    </div>
  )
}
