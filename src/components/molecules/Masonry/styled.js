import styled from "styled-components";

export const MasonryWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: ${({ gridGap }) => gridGap};
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    grid-template-columns: 1fr;
  }
`;

export const MasonryColumn = styled.li`
  display: grid;
  grid-gap: ${({ gridGap }) => gridGap};
  grid-auto-rows: max-content;
`;