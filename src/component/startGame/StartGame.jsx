import React, { useState } from 'react';
import './StartGame.css';
import MySelect from '../select/MySelect';

const StartGame = () => {

const [gameName, setGameName]  = useState('Название игры') 
const setLocalStoreGameName = (e) => {
  setGameName(e.target.value)
  localStorage.setItem('gameName', `${gameName}`)  
  console.log('localStorage', localStorage.getItem('gameName'))
  }

  const setLocalStoreMaplayout = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className = 'start-block'>
       <div className = 'modal-block'>
        <div className = 'modal-block-name'>
          <span> Введите название игры: </span>
          <input className = 'modal-block__input' 
            placeholder = 'Название'
            type ='text' 
            value = { gameName } 
            onChange = {setLocalStoreGameName}
          ></input>
        </div>
        
        <MySelect 
          onChange = {setLocalStoreMaplayout}
        ></MySelect>
        <button className = 'modal-block__button'>Начать игру</button>
       </div>
    </div>
  );
}

export default StartGame;