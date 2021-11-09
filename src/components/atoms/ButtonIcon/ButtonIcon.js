import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 48px;
  height: 48px;
  border: 2px solid ${({ theme }) => theme.colors.lipstick};
  background: #ae0046;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  background-size: 60%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url(${({ icon }) => icon});
`;

export default ButtonIcon;
