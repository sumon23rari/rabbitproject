import React from 'react'
import RecentItem from './RecentItem';
import Tournament from './Tournament';
import Football from './Football';
import Leagh from './Leagh';

function ShowItem({currentTheme}) {
  return (
    <div className={`${currentTheme==='dark'?'bg-[#404040] text-white':'bg-white text-[#404040]'}`}>
      <RecentItem></RecentItem>   
      <Tournament></Tournament>
      <Football></Football>
      <Leagh></Leagh>
    </div>
  )
}
export default  ShowItem;
