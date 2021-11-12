import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from './UserPageTemplate';
import Header from 'components/atoms/Header/Header';
import { Container } from 'components/atoms/Container';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  margin: 4rem auto;
  justify-items: center;
  position: relative;

  ${({ pageType }) =>
    pageType === 'home' &&
    css`
      grid-template-columns: 1fr;
    `};

  ${({ pageType }) =>
    pageType === 'notes' &&
    css`
      display: flex;
    `}
`;

const GridTemplate = ({ children, pageType }) => (
      <UserPageTemplate>
        <Container>
          <Header>Nagłówek strony {pageType}</Header>
          <StyledGrid pageType={pageType}>
            {children}
          </StyledGrid>
        </Container>
      </UserPageTemplate>
    );

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
};

GridTemplate.defaultProps = {
  pageType: 'home',
};

export default GridTemplate;
