import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import Paragraph from 'components/atoms/Paragraph';

const Wrapper = styled.div`
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.3s;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }

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

const styleIcon = Icon => styled(Icon)`
  font-size: 3rem;
`;

export const ContactMe = () => {
  const contact = [
    {
      name: 'github',
      url: 'https://github.com/patrycja-i-lesniak',
      Icon: styleIcon(FaGithub),
    },

    // {
    //   name: 'email',
    //   url: 'mailto: patrycja.lesniak@gmail.com',
    //   Icon: styleIcon(MdAlternateEmail),
    // },
  ];

  return (
    <Wrapper>
      <StyledParagraph>© 2021 | Coded by Patrycja Leśniak</StyledParagraph>
      <List>
        {contact.map(({ name, url, Icon }) => (
          <Item key={name}>
            <Link href={url} title={name} target="_blank" rel="noreferrer">
              <Icon />
            </Link>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};
