import React, { useState } from 'react'
import LegalButton from './LegalButton';
import Terms from './LeCompo/Terms';
import Privacy from './LeCompo/Privacy';
import Faqs from './LeCompo/Faqs';
import Refund from './LeCompo/Refund';
import Gdpr from './LeCompo/Gdpr';
import Content from './LeCompo/Content';
import legalStyle from '../styles/Legal.module.css'
export default function Leagal() {
  const [active,setActive]=useState('firstElement');
  return (
    <div className={legalStyle.legalMain}>
      <div className="container mx-auto">
        <div className="row">
         <h3 className={legalStyle.legaltitle}>legal</h3>
            <div className={legalStyle.legalbox}>
              
                <div className={`grid grid-cols-12 ${legalStyle.Mainbox}`}>
                  <div className={`col-span-3  ${legalStyle.buttonLeft}`}>
                    <LegalButton active={active} setActive={setActive}></LegalButton>
                  </div>
                  <div className="col-span-9" style={{background:'#404040'}}>
                    {active==='firstElement' && <Terms></Terms>}
                    {active==='secondElement' && <Privacy></Privacy>}
                    {active==='thirdElement' && <Faqs></Faqs>}
                    {active==='fourthElement' && <Refund></Refund>}
                    {active==='fiveElement' && <Gdpr></Gdpr>}
                    {active==='sixElement' && <Content></Content>}
                  </div>
                </div>
             
            </div>
         
        </div>
      </div>
    </div>
  )
}
