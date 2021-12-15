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
  StatusParagraph,
} from './styled';
import trashIcon from 'assets/icons/trash.svg';
import lcLogo from 'assets/icons/lcLogo.svg';
import { Arrow } from 'components/atoms/Arrow';
import ConfirmationPopup from 'components/molecules/Popups/ConfirmationPopup';
import withContext from 'hoc/withContext';

const CardBig = ({ item, pageContext }) => {
  const [showMore, setShowMore] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    id: null,
  });

  const itemId = item.id;

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
            <StyledImage src={item.fields.imageUrl} />
            <ExtraWrapper>
              <div>
                {pageContext === 'authors' ? (
                  <>
                    <StyledTitle>
                      {item.fields.firstName} {item.fields.lastName}
                    </StyledTitle>

                    <DataWrapper>
                      <Label>date of birth:</Label>
                      <StyledData>{item.fields.dateOfBirth}</StyledData>
                    </DataWrapper>

                    <DataWrapper>
                      <Label>date of death:</Label>
                      <StyledData>{item.fields.dateOfDeath}</StyledData>
                    </DataWrapper>

                    <DataWrapper>
                      <Label>oficial website:</Label>
                      <StyledData>{item.fields.oficialWebsite}</StyledData>
                    </DataWrapper>
                  </>
                ) : (
                  <StyledTitle>{item.fields.title}</StyledTitle>
                )}
                {pageContext === 'authors' ? null : (
                  <StyledAuthor>
                    {item.fields.firstName} {item.fields.lastName}
                  </StyledAuthor>
                )}
                {pageContext === 'books' && (
                  <Details>
                    <DataWrapper>
                      <Label>series:</Label>
                      <StyledData>{item.fields.series}</StyledData>
                    </DataWrapper>

                    <DataWrapper>
                      <Label>date of publication:</Label>
                      <StyledData>{item.fields.date}</StyledData>
                    </DataWrapper>

                    <DataWrapper>
                      <Label>ISBN:</Label>
                      <StyledData>{item.fields.isbn}</StyledData>
                    </DataWrapper>

                    <DataWrapper>
                      <Label>pages:</Label>
                      <StyledData>{item.fields.numberOfPages}</StyledData>
                    </DataWrapper>

                    <DataWrapper>
                      <Label>translate:</Label>
                      <StyledData>{item.fields.translation}</StyledData>
                    </DataWrapper>

                    <DataWrapper>
                      <Label>publisher:</Label>
                      <StyledData>{item.fields.publishing}</StyledData>
                    </DataWrapper>
                  </Details>
                )}
              </div>
              <div>
                <ButtonsWrapper>
                  {item.fields.status && item.fields.status === 'to read' && <Status toRead />}
                  {item.fields.status && item.fields.status === 'read' && <Status read />}
                  {item.fields.status && item.fields.status === 'to buy' && <Status toBuy />}
                  {item.fields.status && item.fields.status === 'borrowed' && <Status borrowed />}
                  {item.fields.status && item.fields.status === 'in progress' && (
                    <Status inProgress />
                  )}
                  <StatusParagraph>{item.fields.status}</StatusParagraph>

                  <LCButton
                    target="_blank"
                    rel="noreferrer"
                    href={item.fields.LClink}
                    icon={lcLogo}
                  />
                  <Icon icon={trashIcon} onClick={handleDelete} />
                </ButtonsWrapper>
              </div>
            </ExtraWrapper>
          </UpperContainer>
          {item.fields.content && item.fields.content.length > 400 ? (
            <LowerContainer>
              {showMore ? item.fields.content : `${item.fields.content.slice(0, 400)}...`}
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
            <LowerContainer>{item.fields.content}</LowerContainer>
          )}
        </InnerWrapper>
        {popup.show && (
          <ConfirmationPopup handleDeleteFalse={handleDeleteFalse} item={item} itemId={itemId} />
        )}
      </Wrapper>
    </>
  );
};

CardBig.propTypes = {
  cardType: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
  item: PropTypes.object,
  author: PropTypes.object,
  note: PropTypes.object,
  handleDelete: PropTypes.func,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
};

CardBig.defaultProps = {
  book: {},
  author: {},
  note: {},
};

export default withContext(CardBig);
