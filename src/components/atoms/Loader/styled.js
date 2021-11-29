import styled, { keyframes } from 'styled-components';

const animationLeft = keyframes`
0%{left:20%;}
	50%{left:50%;}
	100%{left:20%;}
`;

const animationRight = keyframes`
	0%{left:80%;}
	50%{left:50%;}
	100%{left:80%;}
`;

export const Centred = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.white};
  /* filter: contrast(10); */
`;

export const BlobLeft = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  background: ${({ theme }) => theme.colors.lipstick};
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  left: 20%;
  animation: ${animationLeft} 2.5s ease infinite;
`;

export const BlobRight = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  background: #fff;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  left: 80%;
  animation: ${animationRight} 2.5s ease infinite;
  background: ${({ theme }) => theme.colors.black};
`;

export const StyledParagraph = styled.p`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
`;
