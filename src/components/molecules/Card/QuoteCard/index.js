import {
  StyledWrapper,
  Top,
  Text,
  Quote,
  ButtonSmall,
} from './styled.js';
import trashIcon from 'assets/icons/trash.svg';

const QuoteCard = ({ quote, pageContext }) => {
  return (
    <StyledWrapper>
      <Top />
      <ButtonSmall>edit</ButtonSmall>
      <Text>{quote.fields.title}</Text>
      {/* {quote.fields.author &&  */}
      <Text>{quote.fields.author}</Text>
      {/* } */}

      <Quote>{quote.fields.quote}</Quote>

      <ButtonSmall secondary>delete</ButtonSmall>
    </StyledWrapper>
  );
};

export default QuoteCard;
