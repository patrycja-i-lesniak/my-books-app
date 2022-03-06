import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 2rem;
  margin: 4rem auto 4rem;
  justify-items: center;
  justify-content: center;
  position: relative;

  ${({ notes }) =>
    notes &&
    css`
      grid-template-columns: repeat(auto-fill, 340px);
    `}
`;
