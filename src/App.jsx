import './App.css';
import Game from './component/game/Game';
import Header from './component/header/Header';
import { useState } from 'react';
import { ChoosenCard } from './context/ChosenCard';

function App() {
  const [context, setContext] = useState();
  const [choosenCard, setChoosenCard] = useState()
  const [isActiveCard, setIsActiveCard] = useState(false);

  const handleClick = () => {
    if(isActiveCard === true) {
      setIsActiveCard(!isActiveCard)}
  };

  return (
    <ChoosenCard.Provider value = {[choosenCard, setChoosenCard]}>

      <div onClick={handleClick}>
        <Header></Header>
        <div>{context}</div>
        <Game></Game>
      </div>
    </ChoosenCard.Provider>
  );
}

export default App;
