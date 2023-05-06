import React from 'react'
import RecentItem from './RecentItem';
import Tournament from './Tournament';
import Football from './Football';
import Leagh from './Leagh';

function ShowItem() {
  return (
    <div style={{background:'#404040'}}>
      <RecentItem></RecentItem>   
      <Tournament></Tournament>
      <Football></Football>
      <Leagh></Leagh>
    </div>
  )
}
export default  ShowItem;
