import React from 'react'
import aboutStyle from '../styles/About.module.css';
import Image from 'next/image';
import aboutpic from '../public/images/about.jpg';
 function About() {
  return (
    <div className={aboutStyle.aboutTop}>
        <div className="container mx-auto">
            <div className="row">
                <div className="column-12">
                    <h1 className={aboutStyle.sectionTitle}>about us</h1>
                </div>
            </div>
            <div className="row">
                <div className="column-12 pb-16">
                    <div className={aboutStyle.aboutbox}>
                        <div>
                            <div className={`grid grid-cols-12 ${aboutStyle.aboutMain}`}>
                                <div className="col-span-8">
                                    <div className={aboutStyle.aboutxt}>
                                        <p>Rabbitholebd is a video streaming based premium solutions that allows its subscribers to watch live Cricket and Football matches. Huge collections of Drama, Telefilms, Sports, Traveling, TV shows and many more. There are always something new to discover and contents are added in regular intervals!</p>
                                    </div>
                                </div>
                                <div className="lg:col-span-4">
                                    <div className={aboutStyle.aboutImg}>
                                     
                                           <Image src={aboutpic}></Image>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default About;