import React, { useState, useEffect } from 'react';

import api from 'api';
// import Button from 'components/atoms/Button/Button';

import { QuoteWrapper, QuoteSource, StyledQuote, StyledButton } from './styled.js';

const QuotesBox = () => {
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
    return () => {
      setQuotes();
    };
  }, []);

  return (
    <QuoteWrapper>
      <StyledQuote>{quotes.fields.quote}</StyledQuote>
      <QuoteSource>
        <StyledQuote secondary>{quotes.fields.title}</StyledQuote>
        <StyledQuote secondary>{quotes.fields.author}</StyledQuote>
      </QuoteSource>
      <StyledButton onClick={getQuote}>Get new quote</StyledButton>
    </QuoteWrapper>
  );
};

export default QuotesBox;
