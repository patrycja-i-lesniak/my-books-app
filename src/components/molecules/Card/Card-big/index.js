import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledImage,
  StyledTitle,
  StyledAuthor,
  InnerWrapper,
  Icon,
  LCButton,
  Wrapper,
  UpperContainer,
  LowerContainer,
  DataWrapper,
  Label,
  StyledData,
  Details,
  ButtonsWrapper,
  Status,
  ExtraWrapper,
  ShowMore,
  ButtonContentWrapper,
} from './styled';
import trashIcon from 'assets/icons/trash.svg';
import lcLogo from 'assets/icons/lcLogo.svg';
import { Arrow } from 'components/atoms/Arrow';
import ConfirmationPopup from 'components/molecules/Popups/ConfirmationPopup';


const CardBig = ({ book }) => {
  const [showMore, setShowMore] = useState(false);
   const [popup, setPopup] = useState({
     show: false,
     id: null,
   });

   const handleDelete = id => {
     setPopup({
       show: true,
       id,
     });
     console.log('open popup');
   };

   const handleDeleteFalse = () => {
     setPopup({
       show: false,
       id: null,
     });
     console.log('Close popup');
   };

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <UpperContainer>
            <StyledImage src={book.fields.imageUrl} />
            <ExtraWrapper>
              <div>
                <StyledTitle>{book.fields.title}</StyledTitle>
                <StyledAuthor>
                  {book.fields.firstName} {book.fields.lastName}
                </StyledAuthor>

                <Details>
                  <DataWrapper>
                    <Label>series:</Label>
                    <StyledData>{book.fields.series}</StyledData>
                  </DataWrapper>

                  <DataWrapper>
                    <Label>date of publication:</Label>
                    <StyledData>{book.fields.date}</StyledData>
                  </DataWrapper>

                  <DataWrapper>
                    <Label>pages:</Label>
                    <StyledData>{book.fields.numberOfPages}</StyledData>
                  </DataWrapper>

                  <DataWrapper>
                    <Label>publisher:</Label>
                    <StyledData>{book.fields.publishing}</StyledData>
                  </DataWrapper>

                  <DataWrapper>
                    <Label>ISBN:</Label>
                    <StyledData>{book.fields.isbn}</StyledData>
                  </DataWrapper>

                  <DataWrapper>
                    <Label>translate:</Label>
                    <StyledData>{book.fields.translation}</StyledData>
                  </DataWrapper>
                </Details>
              </div>
              <div>
                <ButtonsWrapper>
                  <Status>{book.fields.status}</Status>

                  <LCButton
                    target="_blank"
                    rel="noreferrer"
                    href={book.fields.LClink}
                    icon={lcLogo}
                  />
                  <Icon icon={trashIcon} onClick={handleDelete} />
                </ButtonsWrapper>
              </div>
            </ExtraWrapper>
          </UpperContainer>
          {book.fields.content && book.fields.content.length > 400 ? (
            <LowerContainer>
              {showMore ? book.fields.content : `${book.fields.content.slice(0, 400)}...`}
              <ShowMore onClick={() => setShowMore(!showMore)}>
                <ButtonContentWrapper>
                  <span>
                    {showMore ? 'Show less' : 'Show more'}
                    <Arrow showMore={showMore} />
                  </span>
                </ButtonContentWrapper>
              </ShowMore>
            </LowerContainer>
          ) : (
            <LowerContainer>{book.fields.content}</LowerContainer>
          )}
        </InnerWrapper>
        {popup.show && (
          <ConfirmationPopup
            handleDeleteFalse={handleDeleteFalse}
            // handleDeleteTrue={handleDeleteTrue}
          />
        )}
      </Wrapper>
    </>
  );
};

CardBig.propTypes = {
  cardType: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
  book: PropTypes.object,
  author: PropTypes.object,
  note: PropTypes.object,
  handleDelete: PropTypes.func,
};

CardBig.defaultProps = {
  book: {},
  author: {},
  note: {},
};

export default CardBig;
