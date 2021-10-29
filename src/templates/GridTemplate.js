import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from './UserPageTemplate';
import Header from 'components/atoms/Header/Header';

const StyledWrapper = styled.div`
  max-width: 1080px;
  background-color: #f4f1f1;
  margin: 50px auto;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${({pageType}) => ( pageType === 'home' ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)')};
  grid-gap: 40px 20px;
  justify-items: center;


`;

const GridTemplate = ({ children, pageType }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <Header >Nagłówek strony {pageType}</Header>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.string,
  pageType: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
};

GridTemplate.defaultProps = {
  pageType: 'home',
};

export default GridTemplate;
