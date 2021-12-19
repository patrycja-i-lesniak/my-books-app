import React, { useState } from 'react';
import styled from 'styled-components';

import api from 'api';
import Button from 'components/atoms/Button/Button';

const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  margin: 120px auto 50px;
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.grey};
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    padding: 30px 20px;
    margin: 60px auto 40px;
  }
`;
const QuoteSource = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1rem;
  font-style: italic;
  padding-top: 20px;
  gap: 10px;
`;

const StyledQuote = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
  margin: 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 2rem;
    padding: 0 0 30px;
    margin: 0;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  left: 50px;
  bottom: 50px;
`;

function Quotes() {
  const [quotes, setQuotes] = useState({
    fields: {
      content: 'Książka to najlepszy przyjaciel człowieka, a biblioteka to świątynia jego myśli.',
      author: 'Cyceron',
      title: '',
    },
  });

  const getQuote = async () => {
    const data = await api.get('/quotes');

    let randomNumber = Math.floor(Math.random() * data.records.length);

    setQuotes(data.records[randomNumber]);
    console.log(data.records[randomNumber]);
  };

  return (
    <QuoteWrapper>
      <StyledQuote>{quotes.fields.content}</StyledQuote>

      <QuoteSource>
        <StyledQuote>{quotes.fields.title}</StyledQuote>
        <StyledQuote>{quotes.fields.author}</StyledQuote>
      </QuoteSource>

      <StyledButton onClick={getQuote}>Get new quote</StyledButton>
    </QuoteWrapper>
  );
}

export default Quotes;
