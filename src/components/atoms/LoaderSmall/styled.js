import styled, { keyframes } from 'styled-components';

export const Centred = styled.div`
  margin: 150px auto 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const rotateRightAnimation = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`;

const rotateLeftAnimation = keyframes`
  0% {transform: rotate(0deg)}
  100% {transform: rotate(-360deg)}
`;

export const LoaderContainer = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  max-width: 400px;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Load = styled.div`
  & {
    position: relative;
    min-width: 90px;
    min-height: 90px;
    border-radius: 50%;
    border: 10px solid ${({ theme }) => theme.colors.lipstick};
    /* border-top: 15px solid transparent; */
    /* border-bottom: 15px solid transparen}; */
    animation: ${rotateLeftAnimation} 1.5s linear infinite;
    margin: 0 auto;
  }
  &:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 10px solid ${({ theme }) => theme.colors.black};
    /* border-left: 10px solid transparent; */
    animation: ${rotateRightAnimation} 1s linear infinite;
  }
`;
export const StyledParagraph = styled.p`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
`;
