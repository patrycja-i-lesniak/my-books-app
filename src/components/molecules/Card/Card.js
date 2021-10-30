import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  margin: 0;
  width: 200px;
  min-height: 350px;
  transition: transform 0.3s;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    transform: scale(1.03);
    background-color: ${({ theme }) => theme.colors.lipstick};
  }
`;

const StyledImage = styled.img`
  height: 225px;
  padding: 0 0 10px;
  background-color: transparent;
`;

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.xs};
  font-weight: ${({ theme }) => theme.font.bold};
  text-align: center;
  padding: 0 0 10px;
  margin: 0;

  ${StyledWrapper}:hover & {
    color: white;
  }
`;

const StyledAuthor = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.xxs};
  font-weight: ${({ theme }) => theme.font.regular};
  margin: 0;
  text-align: center;
  padding: 0 0 5px;

  ${StyledWrapper}:hover & {
    color: white;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grey};
`;

const StyledButton = styled(Button)`
  border: none;
  box-shadow: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.font.xxs};
  font-weight: ${({ theme }) => theme.font.light};

  ${StyledWrapper}:hover & {
    color: white;
  }

  &:active {
    font-weight: ${({ theme }) => theme.font.bold};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Card = ({ pageType, imageUrl, title, author, name, content, description, date }) => {
  return (
    <>
      <StyledWrapper pageType={pageType}>
        <StyledImage pageType={pageType !== 'notes'} src={imageUrl} alt={title} />
        <StyledTitle>
          {title}
          {name}
        </StyledTitle>
        <StyledParagraph>{date}</StyledParagraph>
        <StyledAuthor>{author}</StyledAuthor>
        <Paragraph>{content}</Paragraph>
        <Paragraph>{description}</Paragraph>
        <StyledButton seeMore>see more</StyledButton>
      </StyledWrapper>
    </>
  );
};

Card.propTypes = {
  pageType: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Card.defaultProps = {
  pageTypes: 'books',
};

export default Card;
