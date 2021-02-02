import styled, { css } from "styled-components";
import { AiOutlineApple, AiOutlineGoogle, AiOutlineMail } from "react-icons/ai";

export const GoogleButton = () => {
  return (
    <StyledGoogleButton>
      <AiOutlineGoogle />
    </StyledGoogleButton>
  );
};

export const AppleButton = () => {
  return (
    <StyledAppleButton>
      <AiOutlineApple />
    </StyledAppleButton>
  );
};

export const EmailButton = () => {
  return (
    <StyledEmailButton>
      <AiOutlineMail />
    </StyledEmailButton>
  );
};

const buttonStyles = css`
  height: 48px;
  width: 256px;
  border-radius: 24px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
  > svg {
    height: 32px;
    width: auto;
  }
`;

const StyledGoogleButton = styled.button`
  ${buttonStyles}
  background: #4285F4;
  color: white;
`;

const StyledAppleButton = styled.button`
  ${buttonStyles}
  background: #A3AAAE;
  color: #f9f6ef;
`;

const StyledEmailButton = styled.button`
  ${buttonStyles};
  background: #333333;
  color: #ccff33;
`;
