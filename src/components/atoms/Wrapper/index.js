import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  width: 200px;
  padding: 20px;
  margin: 0;
  transition: transform 0.3s;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;

  &:hover {
    transform: scale(1.03);
    background-color: ${({ theme }) => theme.colors.lipstick};
  }

  ${({ notes }) =>
    notes &&
    css`
      width: 340px;
      padding: 30px;
      background-color: ${({ theme }) => theme.colors.white};
      &:hover {
        transform: scale(1.01);
        background-color: ${({ theme }) => theme.colors.lipstick};
      }
    `}
`;

export default Wrapper;
