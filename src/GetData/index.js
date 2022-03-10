import PropTypes from 'prop-types';
('react-router-dom');

import { CardSmall } from 'components/molecules/Card/index';
import { useFetchData } from 'customHooks';
import LoaderSmall from 'components/atoms/LoaderSmall';
import Error from 'components/atoms/Error';

const GetData = ({ data }) => {
  const { items } = useFetchData(data);

  return (
    <>
      {items.status === 'loading' ? (
        <LoaderSmall />
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
};

export default GetData;
