import styled, {css} from 'styled-components';
import hamburgerIcon from 'assets/icons/hamburger.svg';
import closeIcon from 'assets/icons/close.svg';

const ButtonIcon = styled.button`
  width: 36px;
  height: 36px;
  border: 2px solid ${({ theme }) => theme.colors.lipstick};
  background: #ae0046;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  background-image: url(${hamburgerIcon});
  background-size: 60%;
  background-position: 50%;
  background-repeat: no-repeat;

  &:active {
    border-color: ${({ theme }) => theme.colors.lightLipstick};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-image: url(${closeIcon});
    `};
`;

export default ButtonIcon;

// ${({ secondary }) =>
//     secondary &&
//     css`
//       background-image: url(../../../assets/icons/close.svg);
//     `};

//     @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
//     background-image: url(../../../assets/icons/hamburger.svg);
//     background-repeat: no-repeat;
//   }
