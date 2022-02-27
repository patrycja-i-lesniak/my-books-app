import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  transition: transform 0.3s;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;

  &:hover {
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.colors.lipstick};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  color: ${({ theme }) => theme.colors.grey};
  z-index: 999;
  cursor: pointer;

  ${Wrapper}:hover & {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledQuote = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.font.bold};
  text-align: center;
  margin-top: 10px 0 0;

  ${Wrapper}:hover & {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledTitle = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.lipstick};
  text-align: center;
  margin-top: 10px 0 0;
  font-style: italic;

  ${Wrapper}:hover & {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledAuthor = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font.regular};
  margin: 0;
  text-align: center;

  ${Wrapper}:hover & {
    color: ${({ theme }) => theme.colors.black};
  }
`;
