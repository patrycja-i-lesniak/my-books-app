import PropTypes from 'prop-types';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import DetailsPageTemplate from 'templates/DetailsPageTemplate';
import Loader from 'components/atoms/Loader';
import Error from 'components/atoms/Error';
import { CardBig } from 'components/molecules/Card';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import { useFetchDetailsData } from 'customHooks';
import { IoMdArrowDropleft } from 'react-icons/io';

const StyledButton = styled(Button)`
  margin: 20px 0;
`;

const DetailsPage = pageContext => {
  const { id } = useParams();
  const history = useHistory();
  const { itemData } = useFetchDetailsData(id);

  return (
    <DetailsPageTemplate>
      {itemData.status === 'loading' ? (
        <Loader />
      ) : itemData.status === 'error' ? (
        <Error reloadButton />
      ) : (
        <>
          <CardBig itemData={itemData} />
          <StyledButton
            onClick={() => {
              history.goBack();
            }}
          >
            <IoMdArrowDropleft /> Go Back
          </StyledButton>
        </>
      )}
    </DetailsPageTemplate>
  );
};

DetailsPage.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'books', 'quotes']),
};

export default withContext(DetailsPage);
