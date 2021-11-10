import styled from 'styled-components';
import { booksData } from 'assets/booksData';
import Header from 'components/atoms/Header/Header';
import Card from 'components/molecules/Card/Card';

const books = booksData;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

// const InnerWrapper = styled.div`
//   width: 300px; //dla @media ustawić mniejszy rozmiar
//   height: 400px;
//   margin: 0 1rem;
//   color: #fff;
//   perspective: 1000px;
//   position: relative;
//   text-align: center;
//   margin-bottom: 20px;
// `;

const LastAdded = () => (
<>
    <Header>Ostatnio dodane</Header>  <StyledWrapper>
    {books.map(({ title, author, imageUrl, id }) => (
      <Card imageUrl={imageUrl} title={title} author={author} key={id} />
    ))}
  </StyledWrapper>
  </>
);

export default LastAdded;
