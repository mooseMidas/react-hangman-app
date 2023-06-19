import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import WordList from "./components/WordList";
import Clue from "./components/Clue";
import { showNotification as show} from "./helpers/helpers";
import "./App.css";


//Array of words are imported in words variable
const words =  WordList;
//Random selected word is chosen
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  //below state variables will help determine if user has lost, reset the game and set notification value
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  //use of useEffect function will handle the window event listener method to only render once 
  // using "show" helper to notify user if the same letter has been entered twice  
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      // letter keys equals 65 to 90 keycode 
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);
    //function below will ensure only one eventlistner is enabled when rendering the page. The function acts as a clean-up function
    return () => window.removeEventListener("keydown", handleKeydown);
    //useEffect dependencies 
  }, [correctLetters, wrongLetters, playable]);

  //Function below will reset state values which resets the game and returns a new random word
  function playAgain() {
    setPlayable(true);
    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
      <Clue selectedWord={selectedWord} showNotification={showNotification} />
      
    </>
  );
}

export default App;


/*This app is mostly based on Youtube tutorial  
Build Hangman With React, Traversy Media, Youtube, Retrieved on 15 June 2023 from https://www.youtube.com/watch?v=jj0W8tYX_q8
*/
