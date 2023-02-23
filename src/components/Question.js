import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  //useEffect() and setTimeout() to run a callback after 1 second
 useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((timeRemaining) => timeRemaining - 1)
      }, 1000)}
    else {
      setTimeRemaining(10)
      onAnswered(false)
    }
 })

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
