import React from 'react'
import TotalScore from '../TotalScore/TotalScore';
import {useState} from 'react';
import SelectNumber from '../SelectNumber/SelectNumber';

const GamePlay = () => {
  return (
    <div className='Top'>
   
      <TotalScore />

      <SelectNumber />
    </div>
  )
}

export default GamePlay;
