import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from './UserPageTemplate';
import Header from 'components/atoms/Header/Header';
import { Container } from 'components/atoms/Container';
import withContext from 'hoc/withContext';
import RotaryBox from 'components/molecules/RotaryBox/RotaryBox';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 2rem;
  margin: 4rem auto;
  justify-items: center;
  justify-content: center;
  position: relative;
`;

const StyledQuote = styled.h2`
  color: ${({ theme }) => theme.colors.grey};
  line-height: 1.5;
  padding: 20px 50px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 2rem;
    padding: 0 0 30px;
    margin: 0;
  }
`;

const GridTemplate = ({ children, pageContext }) => (
  <UserPageTemplate>
    <Container>
      {pageContext === 'home' && (
        <StyledQuote secondary>
          {
            ' "Książka to najlepszy przyjaciel człowieka, a biblioteka to świątynia jego myśli." – Cyceron'
          }
        </StyledQuote>
      )}
      {pageContext === 'home' && <RotaryBox />}
      <Header>Nagłówek strony {pageContext}</Header>
      <StyledGrid>{children}</StyledGrid>
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
