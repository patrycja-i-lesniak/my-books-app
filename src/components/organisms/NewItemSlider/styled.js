import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph';

export const StyledWrapper = styled.div`
  border-left: 3px solid ${({ theme }) => theme.colors.lipstick};
  z-index: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  width: 50vw;
  max-width: 600px;
  padding-left: 50px;
  height: 100vh;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.6s ease-in-out;
  overflow: scroll;
  z-index: 4;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100vw;
    border-left: none;
    padding-left: 0;
    align-items: center;
    max-width: unset;
  }
`;

export const StyledHeader = styled(Header)`
  margin: 100px 0 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin-top: 80px;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  width: 90%;
  padding: 5px 0;
  text-align: center;
  font-size: 1.7rem;
  color: ${({theme}) => theme.colors.lipstick}
`;

export const CloseSliderButton = styled(Button)`
  position: fixed;
  top: 43%;
  width: 50px;
  height: 100px;
  left: -20px;
  border-radius: 0 40px 40px 0;
`;
