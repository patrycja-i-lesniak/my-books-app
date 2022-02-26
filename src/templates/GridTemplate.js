import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import UserPageTemplate from './UserPageTemplate';
import Header from 'components/atoms/Header/Header';
import { Container } from 'components/atoms/Container';
import withContext from 'hoc/withContext';
import RotaryBox from 'components/molecules/RotaryBox/RotaryBox';
import QuotesBox from 'components/organisms/QuotesBox';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 2rem;
  margin: 4rem auto 4rem;
  justify-items: center;
  justify-content: center;
  position: relative;

  ${({ notes }) =>
    notes &&
    css`
      grid-template-columns: repeat(auto-fill, 340px);
    `}
`;

const GridTemplate = ({ children, pageContext }) => (
  <UserPageTemplate>
    <Container>
      {pageContext === 'home' ? (
        <>
          <QuotesBox />
          <RotaryBox />

          <Header>Last added books</Header>
        </>
      ) : (
        <Header>{capitalizeFirstLetter(pageContext)}</Header>
      )}

      {pageContext === 'notes' ? (
        <StyledGrid notes>{children}</StyledGrid>
      ) : pageContext === 'quotes' ? (
        <div>{children}</div>
      ) : (
        <StyledGrid>{children}</StyledGrid>
      )}
    </Container>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
};

GridTemplate.defaultProps = {
  pageContext: 'home',
};

export default withContext(GridTemplate);
