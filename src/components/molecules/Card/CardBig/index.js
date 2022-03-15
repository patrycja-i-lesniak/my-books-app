import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ItemSliderContext from 'context/ItemSliderContext';

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
} from './styled';
import trashIcon from 'assets/icons/trash.svg';
import editIcon from 'assets/icons/editIcon.svg';
import lcLogo from 'assets/icons/lcLogo.svg';
import linkIcon from 'assets/icons/link.svg';
import { Arrow } from 'components/atoms/Arrow';
import ConfirmationPopup from 'components/molecules/Popups/ConfirmationPopup';
import withContext from 'hoc/withContext';
// import ReactTooltip from 'react-tooltip';

const CardBig = ({ itemData, pageContext }) => {
  const [showMore, setShowMore] = useState(false);
  // const [randomID, setRandomID] = useState(String(Math.random()));
  const [confirmationPopup, setConfirmationPopup] = useState({
    show: false,
    id: null,
  });

  const { id } = itemData;

  const handleDelete = id => {
    setConfirmationPopup({
      show: true,
      id,
    });
    console.log('Open confirmation popup');
  };

  const handleDeleteFalse = () => {
    setConfirmationPopup({
      show: false,
      id: null,
    });
    console.log('Close confirmation popup');
  };

  const toggleNewItemSlider = useContext(ItemSliderContext);

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
                      <StyledData>{numberOfPages}</StyledData>
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
                <div>
                  <ButtonsWrapper>
                    {status && status === 'to read' && <Status toRead>to read</Status>}
                    {status && status === 'read' && <Status read>read</Status>}
                    {status && status === 'to buy' && <Status toBuy>to buy</Status>}
                    {status && status === 'borrowed' && <Status borrowed>borrowed</Status>}
                    {status && status === 'in progress' && <Status inProgress>in progress</Status>}

                    <Icon target="_blank" rel="noreferrer" as={'a'} href={LClink} icon={lcLogo} />

                    {pageContext === 'authors' && oficialWebsite ? (
                      <Icon
                        target="_blank"
                        rel="noreferrer"
                        as={'a'}
                        href={oficialWebsite}
                        icon={linkIcon}
                      />
                    ) : null}
                    <Icon icon={trashIcon} onClick={handleDelete} />

                    <Icon icon={editIcon} onClick={toggleNewItemSlider} />
                  </ButtonsWrapper>
                </div>
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
        {confirmationPopup.show && (
          <ConfirmationPopup handleDeleteFalse={handleDeleteFalse} item={itemData} id={id} />
        )}
      </Wrapper>
    </>
  );
};

CardBig.propTypes = {
  itemData: PropTypes.object,
  handleDelete: PropTypes.func,
  handleCloseEdit: PropTypes.func,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
};

export default withContext(CardBig);
