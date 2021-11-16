import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { MdAlternateEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lipstick};
  height: 6rem;
  width: 100vw;
  margin-top: 2rem;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    height: 3rem;
    margin: 0;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 1rem;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.3s;
  margin: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-flex;
  gap: 10px;
`;

const Item = styled.li`
  list-style: none;
`;

export const styleIcon = (Icon) => styled(Icon)`
font-size: 2rem;
`;

export const contact = [
  {
    name: 'github',
    url: 'https://github.com/patrycja-i-lesniak',
    Icon: styleIcon(FaGithub),
  },

  {
    name: 'email',
    url: 'mailto: patrycja.lesniak@gmail.com',
    Icon: styleIcon(MdAlternateEmail),
  },
];

const Footer = () => (
  <StyledWrapper>
    <>
      <StyledParagraph>© 2021 | Coded by Patrycja Leśniak</StyledParagraph>
    </>
    <>
      <List>
        {contact.map(({ name, url, Icon }) => (
          <Item key={name}>
            <Link href={url} title={name} target="_blank" rel="noreferrer">
              <Icon />
            </Link>
          </Item>
        ))}
      </List>
    </>
  </StyledWrapper>
);

export default Footer;
