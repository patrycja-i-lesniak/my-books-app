import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiEdit, FiTrash } from 'react-icons/fi';
import ReactTooltip from 'react-tooltip';

import {
  Wrapper,
  IconWrapper,
  ContentWrapper,
  StyledQuote,
  StyledTitle,
  StyledAuthor,
  Icon,
} from './styled';
import ConfirmationPopup from 'components/molecules/Popups/ConfirmationPopup';
import withContext from 'hoc/withContext';

const QuoteCardSmall = ({ item, pageContext }) => {
  const [popup, setPopup] = useState({
    show: false,
    id: null,
  });
  const [randomID, setRandomID] = useState(String(Math.random()));

  const id = item.id;

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
        <IconWrapper>
          <Icon data-tip="edit" data-for={randomID}>
            <FiEdit />
          </Icon>
          <Icon data-tip="delete" data-for={randomID} onClick={handleDelete}>
            <FiTrash />
          </Icon>
          <ReactTooltip id={randomID} place="left" effect="float" type="light" />
        </IconWrapper>
        <StyledQuote>{item.fields.quote}</StyledQuote>
        <StyledAuthor>{item.fields.author}</StyledAuthor>
        <StyledTitle>{item.fields.title}</StyledTitle>
      </Wrapper>
      {popup.show && (
        <ConfirmationPopup handleDeleteFalse={handleDeleteFalse} item={item} id={id} />
      )}
    </>
  );
};

QuoteCardSmall.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
  item: PropTypes.object,
};

QuoteCardSmall.defaultProps = {
  item: {},
};

export default withContext(QuoteCardSmall);
