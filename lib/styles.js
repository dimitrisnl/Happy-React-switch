import styled, { keyframes } from 'styled-components';

const moveIn = keyframes`
  0% {
    left: 0;
    width: 42%;
  }
  50% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 58%;
    width: 42%;
  }
`;

const moveOut = keyframes`
  0% {
    left: 58%;
    width: 42%;
  }
  50% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 0;
    width: 42%;
  }
`;

export const Switch = styled.div`
  display: inline-block;

  cursor: pointer;
  transition: all 0.5s ease-in-out;
  border-radius: 13px;
  box-shadow: 1px 1px 1px #ccc;

  ${({ small }) =>
    small ? `width: 35px; height: 15px;` : `width: 45px; height: 20px;`}

  ${({ on }) =>
    `background-color: ${on ? '#a3be8c' : '#bf616a'} 0.5s forwards;`}

  ${({ disabled }) => (disabled ? `cursor: not-allowed` : '')}
`;

export const Toggle = styled.div`
  position: relative;
  left: 0;
  width: 42%;
  height: 100%;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 1px 1px 1px #aaa;

  ${({ on }) => `animation: ${on ? moveIn : moveOut} 0.5s forwards;`}
`;
