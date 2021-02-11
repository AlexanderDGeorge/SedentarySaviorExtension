import styled, { keyframes } from "styled-components";

export default function AnimatedLogo() {
  return <StyledLogo src="/icon.svg" />;
}

const hover = keyframes`
  from {
    transform: translateY(10px)
  }
  to {
    transform: translateY(-10px),

  }
`;

const StyledLogo = styled.img`
  margin-bottom: 20px;
  animation: ${hover} 2s ease-in-out infinite alternate-reverse;
`;
