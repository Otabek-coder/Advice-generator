import React, { useState, useEffect } from "react";
import { AdviceContainer, Wrapper } from "./appStyle";

export default function App() {

  const [number, setNumber] = useState(1);
  const [quote, setQuote] = useState("");

  function getAdvice(){
    const randomId = Math.floor(Math.random() * 100)
    setNumber(randomId)
  }
  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice/${number}`)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.slip);
        console.log(data)
      });
  }, [number]);

  return (
    <Wrapper>
      <p className="advice-number">Advice #{quote.id}</p>
      <AdviceContainer>
        <p>{quote.advice}</p>
      </AdviceContainer>
      <button onClick={getAdvice}>
        <img src="/images/icon-dice.svg" alt="dice-svg" className="icon-dice" />
      </button>
    </Wrapper>
  );
}
