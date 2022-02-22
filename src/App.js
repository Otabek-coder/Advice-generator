import React, { useState, useEffect } from "react";
import { AdviceContainer, Wrapper } from "./appStyle";

export default function App() {
  const [trigger, setTrigger] = useState(false);
  const [number, setNumber] = useState(0);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const getAPI = async () => {
      try {
        await fetch("https://api.adviceslip.com/advice")
          .then((res) => res.json())
          .then((data) => {
            setNumber(data.slip.id);
            setQuote(data.slip.advice);
          });
      } catch {
        console.log("Issue fetching and parsing Advice Data");
      }
    };
    getAPI();
  }, [trigger, setNumber, setQuote]);

  return (
    <Wrapper>
      <p className="advice-number">Advice #{number}</p>
      <AdviceContainer>
        <p>{quote}</p>
      </AdviceContainer>
      <button onClick={() => setTrigger(!trigger)}>
        <img src="/images/icon-dice.svg" alt="dice-svg" className="icon-dice" />
      </button>
    </Wrapper>
  );
}
