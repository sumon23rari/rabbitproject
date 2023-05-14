import React from 'react'
import RecentItem from './RecentItem';
import Tournament from './Tournament';
import Football from './Football';
import Leagh from './Leagh';

function ShowItem({currentTheme}) {
  return (
    <div className={`${currentTheme==='dark'?'bg-[#404040] text-white':'bg-white text-[#404040]'}`}>
      <RecentItem currentTheme={currentTheme}></RecentItem>   
      <Tournament  className={`${currentTheme==='dark'?'bg-[#404040] text-white':'bg-white text-[#404040]'}`}></Tournament>
      <Football  className={`${currentTheme==='dark'?'bg-[#404040] text-white':'bg-white text-[#404040]'}`}></Football>
      <Leagh  className={`${currentTheme==='dark'?'bg-[#404040] text-white':'bg-white text-[#404040]'}`}></Leagh>
    </div>
  )
}
export default  ShowItem;
