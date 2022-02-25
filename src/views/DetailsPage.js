import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';

import DetailsPageTemplate from 'templates/DetailsPageTemplate';
import Loader from 'components/atoms/Loader';
import Error from 'components/atoms/Error';
import { CardBig } from 'components/molecules/Card';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import { useFetchDetailsData } from 'customHooks';
import { IoMdArrowDropleft } from 'react-icons/io';

const DetailsPage = pageContext => {
  const { id } = useParams();
  const { data: itemData } = useFetchDetailsData(id);
  const history = useHistory();

  console.log('ID and itemData - ', id, itemData);

  return (
    <DetailsPageTemplate>
      {itemData.status === 'loading' ? (
        <Loader />
      ) : itemData.status === 'error' ? (
        <Error reloadButton />
      ) : (
        <>
          <CardBig itemData={itemData} />
          <Button
            onClick={() => {
              history.goBack();
            }}
          >
            <IoMdArrowDropleft /> Go Back
          </Button>
        </>
      )}
    </DetailsPageTemplate>
  );
};

DetailsPage.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'books', 'quotes']),
};

export default withContext(DetailsPage);
