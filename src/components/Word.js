import React from 'react';

/* Component below will handle the word the user has to guess
The word is split and mapped to create the empty string at the bottom of the game
if correctLetters prop includes the letters of the selectedWord, the letter will be returned 
else an empty value is returned*/
const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word