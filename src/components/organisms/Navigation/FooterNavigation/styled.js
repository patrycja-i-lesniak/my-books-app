import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 15px 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lipstick};
  height: 8rem;
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
`;
