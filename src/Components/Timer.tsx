import styled from "styled-components";
import { FiPlay, FiPause } from "react-icons/fi";
import { animated, useSpring } from "react-spring";
import { useEffect } from "react";

export default function Timer(props: {
  minutes: number;
  running: boolean;
  toggleTimer: Function;
}) {
  const { minutes, running, toggleTimer } = props;
  const initialSpring = {
    offset: 1533,
    config: {
      duration: minutes * 60000,
    },
    // onRest: () => toggleTimer(),
  };
  const [spring, setSpring] = useSpring(() => initialSpring);

  useEffect(() => {
    setSpring(initialSpring);
  }, [minutes]);

  const togglePlay = () => {
    if (running) {
      setSpring({ offset: spring.offset.getValue() });
    } else {
      setSpring({ offset: 3066 });
    }
    toggleTimer();
    // setRunning((prev: boolean) => !prev);
  };

  return (
    <StyledDial>
      <StyledSVG
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="circle"
        strokeDashoffset={spring.offset}
      >
        <circle cx="250" cy="250" r="244" strokeWidth="10" />
      </StyledSVG>
      <StyledButton onClick={togglePlay}>
        {running ? <FiPause /> : <FiPlay />}
      </StyledButton>
    </StyledDial>
  );
}

const StyledDial = styled.div`
  position: relative;
  margin-top: 20px;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: #333;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  z-index: 1;
  height: 100px;
  width: 100px;
  border: 0;
  border-radius: 48px;
  background: #333;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > svg {
    height: 60%;
    width: 60%;
    stroke: #ccff33;
    stroke-width: 1;
  }
`;

const StyledSVG = styled(animated.svg)`
  position: absolute;
  stroke: #ccff33;
  stroke-dasharray: 1533;
  transform: rotate(-90deg);
  border-radius: 50%;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
`;
