import React, { useEffect, useState } from 'react'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

 function Carosel({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
  }) {
    const [curr, setCurr] = useState(0)
const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
      }, [])
  return (
    <div className="overflow-hidden relative">
        <div  className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}>
    
            {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev}>
            <CgChevronLeft size={40} className='p-1 rounded-full shadow bg-white/80 text-grey-800 hover:bg-white'></CgChevronLeft>
        </button>
        <button onClick={next}>
            <CgChevronRight size={40} className='p-1 rounded-full shadow bg-white/80 text-grey-800 hover:bg-white'></CgChevronRight>
        </button>
        </div>
    </div>
  )
}
export default Carosel;