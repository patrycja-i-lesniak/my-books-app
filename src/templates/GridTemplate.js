import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from './UserPageTemplate';
import Header from 'components/atoms/Header/Header';
import { Container } from 'components/atoms/Container';
import withContext from 'hoc/withContext';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 2rem;
  margin: 4rem auto;
  justify-items: center;
  justify-content: center;
  position: relative;

  ${({ pageContext }) =>
    pageContext === 'home' &&
    css`
      grid-template-columns: 1fr;
    `};

  ${({ pageContext }) =>
    pageContext === 'notes' &&
    css`
      display: flex;
    `}
`;

const GridTemplate = ({ children, pageContext }) => (
      <UserPageTemplate>
        <Container>
          <Header>Nagłówek strony {pageContext}</Header>
          <StyledGrid >
            {children}
          </StyledGrid>
        </Container>
      </UserPageTemplate>
    );

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
};

GridTemplate.defaultProps = {
  pageContext: 'home',
};

export default withContext(GridTemplate);
