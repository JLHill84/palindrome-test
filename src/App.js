import { useState } from "react";
import "./App.css";

function App() {
  const [success, setSuccess] = useState();
  const [input, setInput] = useState("");

  let inputLive;

  const handleInput = (e) => {
    inputLive = e.target.value;
  };

  const reverseWord = (input) => {
    const splitStringArray = input.split("");
    const reversedArray = splitStringArray.reverse();
    const reversedWord = reversedArray.join("");

    return reversedWord;
  };

  const checkIfPalindrome = (input) => {
    const reversedWord = reverseWord(input);
    console.log("reversedWord: ", reversedWord);
    if (reversedWord === input) {
      setSuccess(true);
      setInput(input);
    } else {
      setSuccess(false);
      setInput(input);
    }
    console.log("success: ", success);
  };

  return (
    <div className="App">
      <div className="main">
        <div className="inputArea">
          <input type="text" onChange={(e) => handleInput(e)} />
          <button onClick={() => checkIfPalindrome(inputLive)}>submit</button>
        </div>
        {success === true && <div>{`${input} is a palindrome huzzah!`}</div>}
        {success === false && <div>{`${input} is NOT the palindrome : (`}</div>}
      </div>
    </div>
  );
}

export default App;
