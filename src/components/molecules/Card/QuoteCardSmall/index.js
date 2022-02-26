import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  StyledQuote,
  StyledTitle,
  StyledAuthor,
  Wrapper,
} from './styled';
import withContext from 'hoc/withContext';

const QuoteCardSmall = ({ item, pageContext }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Wrapper>
        <StyledQuote>{item.fields.quote}</StyledQuote>
        <StyledAuthor>{item.fields.author}</StyledAuthor>
        <StyledTitle>{item.fields.title}</StyledTitle>
      </Wrapper>
    </>
  );
};

QuoteCardSmall.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
  item: PropTypes.object,
};

QuoteCardSmall.defaultProps = {
  item: {},
};

export default withContext(QuoteCardSmall);
