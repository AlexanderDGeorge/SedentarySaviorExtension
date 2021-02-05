import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import AnimatedLogo from "./Components/AnimatedLogo";
import Timer from "./Components/Timer";
import { pauseTimer, startTimer } from "./util/handleTimer";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }
  body, html, #root {
    height: 100%;
    width: 100%;
    background: transparent;
  }
  a {
    color: #0365d6;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Application() {
  const [minutes, setMinutes] = useState(1);
  const [running, setRunning] = useState(false);

  const toggleTimer = () => {
    if (running) {
      setRunning(false);
      pauseTimer();
    } else {
      setRunning(true);
      startTimer(minutes * 60000);
    }
  };

  return (
    <>
      <GlobalStyle />
      <StyledApplication>
        <AnimatedLogo />
        <input
          type="number"
          min={0}
          max={120}
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
          disabled={running}
        />
        <Timer minutes={minutes} running={running} toggleTimer={toggleTimer} />
      </StyledApplication>
    </>
  );
}

const StyledApplication = styled.div`
  position: relative;
  height: 568px;
  width: 320px;
  padding: 10px;
  background: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    margin: 10px 0;
  }
  > a {
    position: absolute;
    bottom: 20px;
    color: #555;
  }
`;
