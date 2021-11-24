import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledImage,
  StyledTitle,
  StyledAuthor,
  StyledParagraph,
  InnerWrapper,
  TrashButton,
  // StyledLink,
} from './styled';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Wrapper from 'components/atoms/Wrapper';
import trashIcon from 'assets/icons/trash.svg';

const Card = ({ book, cardType, handleDelete }) => {

  return (
    <Wrapper
    // as={StyledLink} to={`${cardType}/${book.id}`}
    >
      <InnerWrapper>
        {book.fields.imageUrl && <StyledImage src={book.fields.imageUrl} />}
        {cardType === 'authors' ? (
          <StyledTitle>
            {book.fields.firstName} {book.fields.lastName}
          </StyledTitle>
        ) : (
          <StyledTitle>{book.fields.title}</StyledTitle>
        )}
        {cardType === 'books' ? (
          <StyledAuthor>
            {book.fields.firstName} {book.fields.lastName}
          </StyledAuthor>
        ) : null}

        {cardType === 'notes' ? <StyledParagraph>{book.fields.date}</StyledParagraph> : null}
        {cardType === 'notes' ? <Paragraph>{book.fields.content}</Paragraph> : null}
        <TrashButton icon={trashIcon} onClick={handleDelete} />
      </InnerWrapper>
    </Wrapper>
  );
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
  book: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

Card.defaultProps = {
  cardType: 'books',
};

export default Card;
