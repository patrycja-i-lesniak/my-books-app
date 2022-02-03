import { StyledWrapper, Top, Text, Quote, ButtonSmall } from './styled.js';
import trashIcon from 'assets/icons/trash.svg';

const QuoteCard = ({ quote, pageContext }) => {
  return (
    <StyledWrapper>
      <Top />

      <Quote>{quote.fields.quote}</Quote>
      <Text>{quote.fields.title}</Text>
      <Text>{quote.fields.author}</Text>
      <ButtonSmall>edit</ButtonSmall>
      <ButtonSmall secondary>delete</ButtonSmall>
    </StyledWrapper>
  );
};

export default QuoteCard;
