import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledImage,
  StyledTitle,
  StyledAuthor,
  InnerWrapper,
  Icon,
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
  StatusParagraph,
} from './styled';
import trashIcon from 'assets/icons/trash.svg';
import lcLogo from 'assets/icons/lcLogo.svg';
import linkIcon from 'assets/icons/link.svg';
import { Arrow } from 'components/atoms/Arrow';
import ConfirmationPopup from 'components/molecules/Popups/ConfirmationPopup';
import withContext from 'hoc/withContext';

const CardBig = ({ itemData, pageContext }) => {
  const [showMore, setShowMore] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    id: null,
  });

  const id = itemData.id;
  // console.log('itemDataID', id);

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

  console.log('ITEM DATA from BigCard', itemData);

  const {
    status,
    imageUrl,
    firstName,
    lastName,
    title,
    series,
    date,
    isbn,
    numberOfPages,
    translation,
    publishing,
    LClink,
    oficialWebsite,
    content,
  } = itemData.fields;

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <UpperContainer>
            <StyledImage src={imageUrl} />
            <ExtraWrapper>
              <div>
                {pageContext === 'authors' ? (
                  <>
                    <StyledTitle>
                      {firstName} {lastName}
                    </StyledTitle>
                  </>
                ) : (
                  <StyledTitle>{title}</StyledTitle>
                )}
                {pageContext === 'authors' ? null : (
                  <StyledAuthor>
                    {firstName} {lastName}
                  </StyledAuthor>
                )}
                {pageContext === 'books' && (
                  <Details>
                    <DataWrapper>
                      <Label>series:</Label>
                      <StyledData>{series}</StyledData>
                    </DataWrapper>

                    <DataWrapper>
                      <Label>date of publication:</Label>
                      <StyledData>{date}</StyledData>
                    </DataWrapper>

                    <DataWrapper>
                      <Label>ISBN:</Label>
                      <StyledData>{isbn}</StyledData>
                    </DataWrapper>

                    <DataWrapper>
                      <Label>pages:</Label>
                      <StyledData>{itemData.numberOfPages}</StyledData>
                    </DataWrapper>

                    <DataWrapper>
                      <Label>translate:</Label>
                      <StyledData>{translation}</StyledData>
                    </DataWrapper>

                    <DataWrapper>
                      <Label>publisher:</Label>
                      <StyledData>{publishing}</StyledData>
                    </DataWrapper>
                  </Details>
                )}
              </div>
              <div>
                <ButtonsWrapper>
                  {status && status === 'to read' && <Status toRead />}
                  {status && status === 'read' && <Status read />}
                  {status && status === 'to buy' && <Status toBuy />}
                  {status && status === 'borrowed' && <Status borrowed />}
                  {status && status === 'in progress' && <Status inProgress />}
                  <StatusParagraph>{status}</StatusParagraph>

                  <Icon target="_blank" rel="noreferrer" href={LClink} icon={lcLogo} />
                  {pageContext === 'authors' && oficialWebsite ? (
                    <Icon target="_blank" rel="noreferrer" href={oficialWebsite} icon={linkIcon} />
                  ) : null}
                  <Icon icon={trashIcon} onClick={handleDelete} />
                </ButtonsWrapper>
              </div>
            </ExtraWrapper>
          </UpperContainer>
          {itemData.content && itemData.content.length > 400 ? (
            <LowerContainer>
              {showMore ? itemData.content : `${itemData.content.slice(0, 400)}...`}
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
            <LowerContainer>{content}</LowerContainer>
          )}
        </InnerWrapper>
        {popup.show && (
          <ConfirmationPopup handleDeleteFalse={handleDeleteFalse} item={itemData} id={id} />
        )}
      </Wrapper>
    </>
  );
};

CardBig.propTypes = {
  itemData: PropTypes.object,
  handleDelete: PropTypes.func,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
};

export default withContext(CardBig);
