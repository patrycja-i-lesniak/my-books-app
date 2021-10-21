import styled from "styled-components";
import Button from "components/atoms/Button/Button";
import image from "assets/images/ksiegatesknot.jpg";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  margin: 0;
  width: 200px;
  height: 350px;
  transition: transform 0.3s;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    transform: scale(1.03);
    background-color: ${({ theme }) => theme.colors.lipstick};
    color: white;
  }
`;

const StyledImage = styled.img`
  width: 150px;
  height: 225px;
  padding: 0 0 20px;
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

const Card = () => {
  return (
    <>
      <StyledWrapper>
        <StyledImage src={image}/>
        <StyledTitle>Księga Tęsknot</StyledTitle>
        <StyledAuthor>Sue Monk Kidd</StyledAuthor>
        <Button books>see more</Button>
      </StyledWrapper>
    </>
  );
};

export default Card;
