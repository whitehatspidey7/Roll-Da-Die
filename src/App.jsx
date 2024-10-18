import { useState } from 'react';
import './App.css'
import HomePage from './components/HomePage/Home_page';
import GamePlay from './components/GamePlay/GamePlay';

function App() {
 
  const [isGameStarted,setGame] = useState(true);
  
  const toggleGamePlay = () =>{

    setGame((prev) => !prev);
  };
 
  return (
    <>

    { isGameStarted? <GamePlay/>: <HomePage toggle={toggleGamePlay} />}
    </>
  );
}

export default App;
