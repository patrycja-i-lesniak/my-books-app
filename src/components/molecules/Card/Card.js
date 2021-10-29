import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "components/atoms/Button/Button";

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
    color: ${({ theme }) => theme.colors.white};
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
`;
const StyledAuthor = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.xxs};
  font-weight: ${({ theme }) => theme.font.regular};
  margin: 0;
  text-align: center;
  padding: 0 0 5px;
`;

const Card = ({cardType, imageUrl, title, author}) => {
  return (
    <>
      <StyledWrapper cardType={cardType}>
        <StyledImage src={imageUrl}/>
        <StyledTitle>{title}</StyledTitle>
        <StyledAuthor>{author}</StyledAuthor>
        <Button books>see more</Button>
      </StyledWrapper>
    </>
  );
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['small', 'big']),
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardTypes: 'medium',
};

export default Card;
