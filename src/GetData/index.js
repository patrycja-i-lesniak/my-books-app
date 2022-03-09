import PropTypes from 'prop-types';

import { CardSmall } from 'components/molecules/Card/index';
import { useFetchData } from 'customHooks';
import withContext from 'hoc/withContext';
import Loader from 'components/atoms/Loader';
import LoaderSmall from 'components/atoms/LoaderSmall';

import Error from 'components/atoms/Error';

const GetData = ({ data, pageContext }) => {
  const { items } = useFetchData(data);

  return (
    <>
      {items.status === 'loading' ? (pageContext === 'home' ? (<LoaderSmall/>) : (<Loader />)
      ) : items.status === 'error' ? (
        <Error reloadButton />
      ) : (
        <>{items && items.map(item => <CardSmall item={item} key={item.id} />)}</>
      )}
    </>
  );
};

GetData.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
};

export default withContext(GetData);
