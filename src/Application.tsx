import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import LogIn from "./Auth/LogIn";
import useCurrentUser from "./Auth/useCurrentUser";
import AnimatedLogo from "./Components/AnimatedLogo";
import Timer from "./Components/Timer";

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
  const { user } = useCurrentUser();
  const [minutes, setMinutes] = useState(10);
  const [running, setRunning] = useState(false);

  console.log(user);

  return (
    <>
      <GlobalStyle />
      <StyledApplication>
        <AnimatedLogo />
        <Timer minutes={minutes} running={running} setRunning={setRunning} />
      </StyledApplication>
    </>
  );
}

const StyledApplication = styled.div`
  position: relative;
  height: 568px;
  width: 320px;
  border-radius: 40px;
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
