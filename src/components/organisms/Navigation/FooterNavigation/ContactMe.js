import {Wrapper, StyledParagraph, List, Item, Icon, Link, StyleIcon} from './styled';
import { FaGithub } from 'react-icons/fa';

const contact = [
    {
      name: 'github',
      url: 'https://github.com/patrycja-i-lesniak',
      Icon: StyleIcon(FaGithub),
    },

    // {
    //   name: 'email',
    //   url: 'mailto: patrycja.lesniak@gmail.com',
    //   Icon: StyleIcon(MdAlternateEmail),
    // },
  ];

export const ContactMe = () => {

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
