import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import api from 'api';
import Button from 'components/atoms/Button/Button';

const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  margin: 120px auto 50px;
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  position: relative;
  justify-content: center;

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
  padding: 20px 50px 0 0;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    padding: 20px 30px 40px 0;
    gap: 0;
  }
`;

const StyledQuote = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
  margin: 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    padding: 0 0 10px;
    margin: 0;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  font-weight: 600;
  left: 50px;
  bottom: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    left: 20px;
    bottom: 20px;
  }
`;

function QuotesBox() {
  const [quotes, setQuotes] = useState({
    fields: {
      content: '',
      author: '',
      title: '',
    },
  });

  const getQuote = async () => {
    const data = await api.get('/quotes');
    let randomNumber = Math.floor(Math.random() * data.records.length);
    setQuotes(data.records[randomNumber]);
  };

  useEffect(() => {
    getQuote();
  }, []);

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

export default QuotesBox;
