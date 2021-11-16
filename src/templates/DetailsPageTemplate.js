import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import trashIcon from 'assets/icons/trash.svg';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 90vw;
  margin: 50px auto;
  padding: 20px 50px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 70px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 30px;
  left: 30px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  border-radius: 50%;
  position: absolute;
  top: 30px;
  right: 20px;
  z-index: 999;
`;

const StyledImage = styled.img`
  height: 225px;
  width: 150px;
  background-color: transparent;
  margin-bottom: 10px;
`;

const DetailsPageTemplate = ({
  pageContext,
  // id,
  imageUrl,
  title,
  author,
  // series,
  // date,
  // isbn,
  // translation,
  // publishing,
  // pages,
  content,
  // LClink,
}) => (
  <UserPageTemplate >
    <StyledWrapper>
      <div>{imageUrl === '' ? null : <StyledImage src={imageUrl} />}
  <Header>{title}</Header>
      {author === '' ? null : <Paragraph>{author}</Paragraph>}
      <StyledParagraph>{content}</StyledParagraph>
</div>
      
      <StyledButton as={Link} to={`/${pageContext}`}>
        go back
      </StyledButton>
      <StyledButtonIcon icon={trashIcon} />
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsPageTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['home','books','authors','notes']),
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  imageUrl: PropTypes.string,
};

DetailsPageTemplate.defaultProps = {
  pageContext: 'home',
  title: '',
  content: '',
  author: '',
  imageUrl: '',
};

export default withContext(DetailsPageTemplate);

// dodać akcję usuwania notatki do StyledButtonIcon
