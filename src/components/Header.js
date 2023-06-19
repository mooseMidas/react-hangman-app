import React, { useState } from "react";

// installed ES7 React/Redux/React-Native/JS snippets extention to create this component
// rafce
// Component returns a simple header and description. 
//User can also click on rules link to access game rules 

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1><span>Hang</span>man</h1>
      <p className="slogan">Guess the correct word or <span>Die!</span> </p>
      
      <button onClick={() => setShow(!show)}> Rules</button>
      
      <div className={`rules-container ${show ? "show-rules" : ""}`}>
      <h3>Game Rules</h3>
      <p>
        Hangman is a classic word guessing game where you must<br/>
        reveal the secret word by guessing <span>one letter at a time</span>. 
        <br/><br/>
        Each incorrect guess adds another part to the hangman,<br/>
        and you only get <span>6 incorrect guesses</span> before you<br/>
        lose.
        <br/><br/>
        Feel free to make use of the <span>Clue</span> button,<br/>
        you get one clue per round.
        <br/><br/>
        *Extra tip, words are based on <span>coding language</span> 
      </p>
    </div>
    </>
  );
};

export default Header;
