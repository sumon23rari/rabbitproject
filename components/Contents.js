import React from 'react'
import Navbarsd from './Navbarsd'
import Content from './LeCompo/Content'
import Footer from './Footer'

export default function Contents() {
  return (
    <div className='lg:pt-[140px] xl:pt-[140px]'>
        <Navbarsd></Navbarsd>
        <Content></Content>
        <Footer></Footer>
    </div>
  )
}
