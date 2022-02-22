import React, { useState, useEffect } from "react";
import { AdviceContainer, Wrapper } from "./appStyle"

export default function App() {
  const [advice, setAdvice] = useState([]);
  const [id, setId] = useState(1);
  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip);
      });
  }, [id]);
  function getAdvice() {
    const randomId = Math.floor(Math.random() * 200);
    setId(randomId);

  }

  return (
    <Wrapper>
      <p className="advice-number">Advice #{advice.id}</p>
      <AdviceContainer>
        <p>{advice.advice}</p>
      </AdviceContainer>
      <button onClick={getAdvice}>
        <img src="/images/icon-dice.svg" alt="dice-svg" className="icon-dice" />
      </button>
    </Wrapper>
  );
}
