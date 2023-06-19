import React, { useState } from "react";

// Clue component will alert user with the first letter of the word

function Clue({ selectedWord }) {
  let clueWord = selectedWord.slice(2, 3);
  const [show, setShow] = useState(false);

  return (
    <div>
        <button onClick={() => setShow(!show)}> Clue </button>
        
        <div className={`clue-container ${show ? "show-clue" : ""}`}>
          <p>Word includes the letter: <span>{clueWord}</span></p>
      </div>
    </div>
  );
}
export default Clue;

//How to Toggle a Class in React, Sabe, Retrieved on 17 June 2023 from https://sabe.io/blog/react-toggle-class#:~:text=Now%2C%20if%20you%20want%20to,%3E%20%3Cdiv%20className%3D%7Bshow%20%3F


