import { useState } from 'react';
import PropTypes from 'prop-types';

import { Arrow } from 'components/atoms/Arrow';
import { Link } from 'react-router-dom';
import {
  StyledImage,
  StyledTitle,
  StyledAuthor,
  InnerWrapper,
  StyledDate,
  ButtonContentWrapper,
  ShowMore,
} from './styled';
import Wrapper from 'components/atoms/Wrapper';
import withContext from 'hoc/withContext';

const CardSmall = ({ book, author, note, pageContext, 
  }) => {
  const [showMore, setShowMore] = useState(false);
    return (
      <>
        {(pageContext === 'home' || pageContext === 'books') &&
          
            <Wrapper>
              <InnerWrapper>
                <Link to={`books/${book.id}`}>
                  <StyledImage src={book.fields.imageUrl} />
                </Link>
                <StyledTitle>{book.fields.title}</StyledTitle>
                <StyledAuthor>
                  {book.fields.firstName} {book.fields.lastName}
                </StyledAuthor>
              </InnerWrapper>
            </Wrapper>
  }
      {pageContext === 'authors' && (
          <Wrapper>
            <InnerWrapper>
              <Link to={`authors/${author.id}`}>
                <StyledImage src={author.fields.imageUrl} />
              </Link>
              <StyledTitle>
                {author.fields.firstName} {author.fields.lastName}
              </StyledTitle>
            </InnerWrapper>
          </Wrapper>
        )} 

        {pageContext === 'notes' && (
          <Wrapper notes>
            <InnerWrapper>
              <>
                <StyledImage src={note.fields.imageUrl} />
                <StyledTitle>{note.fields.title} </StyledTitle>
                <StyledDate>{note.fields.date}</StyledDate>
                {note.fields.content.length > 300 ? (
                  <>
                    {showMore ? note.fields.content : `${note.fields.content.slice(0, 300)}...`}
                    <ShowMore onClick={() => setShowMore(!showMore)}>
                      <ButtonContentWrapper>
                        <span>
                          {showMore ? 'Show less' : 'Show more'}
                          <Arrow showMore={showMore} />
                        </span>
                      </ButtonContentWrapper>
                    </ShowMore>
                  </>
                ) : (
                  <>{note.fields.content}</>
                )}
              </>
            </InnerWrapper>
          </Wrapper>
        )}
      </>
    );
};

CardSmall.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
  book: PropTypes.object,
  author: PropTypes.object,
  note: PropTypes.object,
  handleDelete: PropTypes.func,
};

CardSmall.defaultProps = {
  book: {},
  author: {},
  note: {},
};

export default withContext(CardSmall);
