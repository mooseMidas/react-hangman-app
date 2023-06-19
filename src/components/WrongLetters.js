import React from 'react'

/*Below component will display the incorrect guesses the user has made
 Incorrect letters heading will only be displayed if there is an incorrect guess
 The wrong letters are mapped then using .reduce function to add a "-" between each letter */
const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && 
          <h3>Incorrect letters:</h3>
        }
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, '- ', curr], null)}
      </div>
    </div>
  )
}

export default WrongLetters