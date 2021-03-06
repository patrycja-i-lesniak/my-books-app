import styled, {css} from 'styled-components';
import Button from 'components/atoms/Button/Button'
import background from 'assets/images/background.jpg';

export const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  margin: 120px auto 50px;
  padding: 50px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  position: relative;
  justify-content: center;
  background: linear-gradient(-45deg, rgba(174, 0, 70, 0.9), rgba(0, 0, 0, 0.7)),
    url(${background}) center center / cover no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    padding: 30px 20px;
    margin: 60px auto 40px;
  }
`;
export const QuoteSource = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1rem;
  font-style: italic;
  padding: 20px 50px 0 0;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    padding: 20px 30px 40px 0;
    gap: 0;
  }
`;

export const StyledQuote = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.3;
  margin: 0;
  text-align: center;
  font-family: 'Caveat', cursive;
  font-size: 2.7rem;
  font-weight: 200;

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 2.2rem;
      line-height:1;

    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    padding: 0 0 10px;
    margin: 0;
  }
`;

export const StyledButton = styled(Button)`
  position: absolute;
  font-weight: 600;
  left: 50px;
  bottom: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    left: 20px;
    bottom: 20px;
  }
`;

