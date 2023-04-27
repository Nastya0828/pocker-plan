import './Card.css';
import React from 'react';
import { useContext } from 'react';
import { ChoosenCard } from '../../context/ChosenCard';

const Card = ({cards, updateCard}) => {
const [selectedCard, setSelectedCard] = useContext(ChoosenCard); 

  return (
    <div>
        <div className ='cards'>
            {cards.map(card =>
                <div 
                    key = {card}    
                    onClick = {() => updateCard(card)}
                    className ={selectedCard == card ? 'choosencard card' : 'card'}>
                    {card}  
                </div>
            )}
        </div>
    </div>
  );
}

export default Card;
