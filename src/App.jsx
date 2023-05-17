import './App.css';
import Game from './component/game/Game';
import Header from './component/header/Header';
import NotFoundPage from './component/notfound/NotFoundPage';
import StartGame from './component/startGame/StartGame';
import { useState } from 'react';
import { ChoosenCard } from './context/ChosenCard';
import { MapLayout } from './context/MapLayout';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [context, setContext] = useState();
  const [choosenCard, setChoosenCard] = useState()
  const [mapLayout, setMapLayout] = useState();
  const [isActiveCard, setIsActiveCard] = useState(false);

  const handleClick = () => {
    if(isActiveCard === true) {
      setIsActiveCard(!isActiveCard)}
  };

  return (
    <>
   <ChoosenCard.Provider value = {[choosenCard, setChoosenCard]}>
   <MapLayout.Provider value = {[mapLayout, setMapLayout]}>
      <div onClick={handleClick}>
        <Header></Header>
        <div>{context}</div>
      </div>
      <Routes> 
        <Route path= "/game" element = {<Game />}></Route>
        <Route path= "/" element = {<StartGame />}></Route>
        <Route path= "*" element = {<NotFoundPage />}></Route>
      </Routes>
    </MapLayout.Provider>
    </ChoosenCard.Provider>
    </>
  );
}

export default App;
