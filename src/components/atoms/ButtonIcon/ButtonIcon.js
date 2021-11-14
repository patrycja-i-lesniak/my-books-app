import styled, {css} from 'styled-components';

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

  ${({secondary}) => 
  secondary && css`
  border: none;
  background-color: transparent;
  width: 38px;
  height: 38px;
  box-shadow: none;
  `}
`;

export default ButtonIcon;
