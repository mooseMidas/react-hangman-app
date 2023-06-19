import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

//Popup component will help display results 
//the checkWin function will determine the status 
//Popup will be based on status and will return a message and a button to play again
//playAgain function is passed as a prop 


const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulations! You won! 😁';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Unfortunately you lost. 😵';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    //final msg is only displayed after checkWin function has determined status. 
    //if finalMsg does not equal to " ", then the msg will be displayed else it remains hidden
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup

//Full Emoji List, v15.0 - Unicode, Retrieved on 16 June 2023 from https://unicode.org/emoji/charts/full-emoji-list.html
