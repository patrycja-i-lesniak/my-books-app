import {useState} from 'react';
import PropTypes from 'prop-types';
import { Arrow } from 'components/atoms/Arrow';
import LogoSmall from 'assets/icons/mblSmall.svg';

import {
  StyledImage,
  StyledTitle,
  StyledAuthor,
  InnerWrapper,
  TrashButton,
  StyledDate,
  ButtonContentWrapper,
  ShowMore,
  // StyledLink,
} from './styled';
import Wrapper from 'components/atoms/Wrapper';
import trashIcon from 'assets/icons/trash.svg';

const Card = ({ book, author, note, cardType,handleDelete }) => {
      const [showMore, setShowMore] = useState(false);
 
      // if (cardType === 'notes') {
      //   return (
      // <Wrapper notes>
      //   <InnerWrapper>
      //     <>
      //       <StyledImage src={note.fields.imageUrl} icon={LogoSmall}/>
      //       <StyledTitle>{note.fields.title} </StyledTitle>
      //       <StyledDate>{note.fields.date}</StyledDate>
      //       {note.fields.content.length > 300 ? (
      //         <>
      //           {showMore ? note.fields.content : `${note.fields.content.slice(0, 300)}...`}
      //           <ShowMore onClick={() => setShowMore(!showMore)}>
      //             <ButtonContentWrapper>
      //               <span>
      //                 {showMore ? 'Show less' : 'Show more'}
      //                 <Arrow showMore={showMore} />
      //               </span>
      //             </ButtonContentWrapper>
      //           </ShowMore>
      //         </>
      //       ) : (
      //         <>{note.fields.content}</>
      //       )}
      //     </>
      //   </InnerWrapper>
      // </Wrapper>
      //   )}};
  

   
  return (
    <>
      {cardType === 'books' && (
        <Wrapper>
          <InnerWrapper>
            <StyledImage src={book.fields.imageUrl} />
            <StyledTitle>{book.fields.title}</StyledTitle>
            <StyledAuthor>
              {book.fields.firstName} {book.fields.lastName}
            </StyledAuthor>
          </InnerWrapper>
          <TrashButton icon={trashIcon} onClick={handleDelete} />
        </Wrapper>
      )}

      {cardType === 'authors' && (
        <Wrapper>
          <InnerWrapper>
            <StyledImage src={author.fields.imageUrl} />
            <StyledTitle>
              {author.fields.firstName} {author.fields.lastName}
            </StyledTitle>
          </InnerWrapper>
        </Wrapper>
      )}

      {cardType === 'notes' && (
        <Wrapper notes>
          <InnerWrapper>
            <>
              <StyledImage src={note.fields.imageUrl} icon={LogoSmall} />
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
  );};
 

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
