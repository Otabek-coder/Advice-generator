import React, { useState, useEffect, useCallback } from "react";
import { AdviceContainer, Wrapper } from "./appStyle";

export default function App() {
  const [id, setId] = useState(1);
  const [advice, setAdvice] = useState({});
  const [refresh, setRefresh] = useState(false);

  function getAdvice() {
    const randomId = Math.floor(Math.random() * 200);
    setId(randomId);
  }
  // useEffect(() => {
  //   const abortController = new AbortController();

  //   fetch(`https://api.adviceslip.com/advice/${id}`, {
  //     signal: abortController.signal,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAdvice(data.slip);
  //       console.log("data is ", data);
  //     })
  //     .catch((err) => {
  //       console.log("error is ", err);
  //     });
  //   return () => {
  //     abortController.abort();
  //   };
  // }, [id]);

  // const fetchAdvice = (_id, signal) => {
  //   fetch(`https://api.adviceslip.com/advice/${_id}`, {
  //     signal,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAdvice(data.slip);
  //       console.log("data is ", data);
  //     })
  //     .catch((err) => {
  //       console.log("error is ", err);
  //     });
  // };
  // useEffect(() => {
  //   const abortController = new AbortController();
  //   fetchAdvice(id, abortController.signal);
  //   return () => {
  //     abortController.abort();
  //   };
  // }, [id]);

  const fetchAdvice = useCallback(
    (signal) => {
      fetch(`https://api.adviceslip.com/advice/${id}`, { signal })
        .then((res) => res.json())
        .then((data) => {
          if (data.slip) {
            setAdvice(data.slip);
          }
          console.log("data is ", data);
        })
        .catch((err) => {
          console.log("error is ", err);
        });
    },
    [id]
  );

  useEffect(() => {
    const abortController = new AbortController();
    fetchAdvice(abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [fetchAdvice]);

  // useEffect(() => {
  //   const abortController = new AbortController();

  //   const fetchAdvice = async() => {
  //     try{
  //       const res = await fetch(`https://api.adviceslip.com/advice/${id}`, {
  //         signal: abortController.signal,
  //       })
  //       const data = await res.json()
  //       setAdvice(data.slip)
  //     }catch(err){
  //         console.log("error is ", err);
  //     }
  //   }
  //   fetchAdvice()
  //   return () => {
  //     abortController.abort();
  //   };
  // }, [id]);

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
