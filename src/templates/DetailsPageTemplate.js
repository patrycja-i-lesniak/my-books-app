import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from "templates/UserPageTemplate"; 
import Header from "components/atoms/Header/Header";
import Paragraph from "components/atoms/Paragraph/Paragraph"; 
import Button from "components/atoms/Button/Button";

const StyledWrapper = styled.div`
display: flex;
flex-direction: column;
`;

const DetailsPageTemplate = ({pageType, title, content}) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <Header>{title}</Header>
      <Paragraph>{content}</Paragraph>
    <Button secondary as={Link} to={`/${pageType}`}>go back</Button>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsPageTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default DetailsPageTemplate;