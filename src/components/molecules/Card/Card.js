import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  width: 200px;
  padding: 20px;
  margin: 0;
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
  background-color: transparent;
  margin-bottom: 10px;
`;

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.font.bold};
  text-align: center;
  margin: 0;

  ${StyledWrapper}:hover & {
    color: white;
  }
`;

const StyledAuthor = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font.regular};
  margin: 0;
  text-align: center;

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
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.font.light};
  height: 20px;

  ${StyledWrapper}:hover & {
    color: white;
  }

  &:active {
    font-weight: ${({ theme }) => theme.font.bold};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: inline-block;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = ({ pageType, imageUrl, title, author, content, date }) => {
  return (
    <StyledWrapper pageType={pageType}>
      <StyledImage src={imageUrl} />
      <InnerWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledAuthor>{author}</StyledAuthor>
        <StyledParagraph>{date}</StyledParagraph>
        <Paragraph>{content}</Paragraph>
      </InnerWrapper>
      <StyledButton seeMore>read more</StyledButton>
    </StyledWrapper>
  );
};

Card.propTypes = {
  pageType: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
  imageUrl: PropTypes.any,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  pageTypes: 'books',
  imageUrl: null,
  author: null,
  date: null,
  description: null,
  content: null,
};

export default Card;
