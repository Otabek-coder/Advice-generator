import styled from "styled-components";
export const Wrapper = styled.div`
  text-align: center;
  position: relative;
  margin: 0 2em;
  background-color: hsl(217, 19%, 38%);
  border-radius: 25px;
  max-width: 540px;
  padding: 2.2em 2em 4.5em 2em;

  button {
    position: absolute;
    display: block;
    padding: 1.5em;
    border-radius: 50%;
    border: 0;
    background-color: hsl(150, 100%, 66%);
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  button:hover {
    cursor: pointer;
    box-shadow: 0px 0px 25px hsl(150, 100%, 66%);
  }
  .advice-number {
    color: hsl(150, 100%, 66%);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 1rem;
  }
`;
export const AdviceContainer = styled.div`
  background-image: url("/images/pattern-divider-desktop.svg");
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100%;
  min-width: 440px;
  min-height: 200px;
  font-size: 28px;
  padding: 1em 0em;
  p {
    font-weight: 800;
    color: hsl(193, 38%, 86%);
  }

  @media (max-width: 47em) {
    background-image: url("/images/pattern-divider-mobile.svg");
    min-width: 250px;
  }
`;