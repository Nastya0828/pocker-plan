import React, { useEffect } from 'react';
import './Game.css';
import Card from '../card/Card';
import { useState,  useContext } from 'react';
import {ChoosenCard} from '../../context/ChosenCard';
import {MapLayout} from '../../context/MapLayout';
import MySelect from '../select/MySelect';

const Game = () => {

  const [cards, setCards] = useState([0, 1, 2, 3, 5, 8, 13, 21])
  const [selectedCard, setSelectedCard] = useState()
  const [status, setStatus] = useState(false)
  const [chosenCard, setChosenCard] = useContext(ChoosenCard);
  const [mapLayout, setMapLayout] = useContext(MapLayout);

  const updateMap = (alignment) => {
    setCards(alignment)
    setMapLayout(alignment)
  }

  const updateCard = (card) => {
    setSelectedCard(card);
    setStatus(true);
    setChosenCard(card)
  }

  return (
    <div>
      <div>
        <div className ='statuscard'>  
          {status
            ? <div className ='pickcard'>Вскрыть карты </div>
            : <div className ='pickcard'> Выберите карту из поля ниже</div>
          } 
          <MySelect
            updateMap = {updateMap}
          ></MySelect>

        </div> 
      </div>

      <div>
        {status
          ? <div className ='instruct'>Карта {selectedCard} выбрана</div>
          : <div className ='instruct'> Выберите свою карту из поля ниже</div>
        }
      </div>
      
        <Card 
          cards = {cards}
          updateCard = {updateCard}
          onClick= {() => {setChosenCard(selectedCard)}}
        ></Card>
      
    </div>
    
  );
}

export default Game;
