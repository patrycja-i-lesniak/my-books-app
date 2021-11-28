import PropTypes from 'prop-types';
import {
  StyledImage,
  StyledTitle,
  StyledAuthor,
  InnerWrapper,
  TrashButton,
  StyledDate,
  // StyledLink,
} from './styled';
import Wrapper from 'components/atoms/Wrapper';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import trashIcon from 'assets/icons/trash.svg';

const Card = ({ book, author, note, cardType, handleDelete }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        {cardType === 'books' && (
          <>
            <StyledImage src={book.fields.imageUrl} />
            <StyledTitle>{book.fields.title}</StyledTitle>
            <StyledAuthor>
              {book.fields.firstName} {book.fields.lastName}
            </StyledAuthor>
          </>
        )}

        {cardType === 'authors' && (
          <>
            <StyledImage src={author.fields.imageUrl} />
            <StyledTitle>
              {author.fields.firstName} {author.fields.lastName}
            </StyledTitle>
          </>
        )}

        {cardType === 'notes' && (
          <>
            {note.fields.imageUrl && <StyledImage src={note.fields.imageUrl} />}
            <StyledTitle>{note.fields.title} </StyledTitle>
            <StyledDate>{note.fields.date}</StyledDate>
            <Paragraph>{note.fields.content}</Paragraph>
          </>
        )}
        <TrashButton icon={trashIcon} onClick={handleDelete} />
      </InnerWrapper>
    </Wrapper>
  );
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
  book: PropTypes.object,
  author: PropTypes.object,
  note: PropTypes.object,
  handleDelete: PropTypes.func,
};

Card.defaultProps = {
  book: {},
  author: {},
  note: {},
}

export default Card;
