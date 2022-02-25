import PropTypes from 'prop-types';

import { CardSmall, QuoteCard } from 'components/molecules/Card/index';
import { useFetchData } from 'customHooks';
import withContext from 'hoc/withContext';

const GetData = ({ data, pageContext }) => {
  const { items } = useFetchData(data);

  console.log('items from GetData:', items);

  return (
    <>
      {items &&
        items.map(item => (
          <>
            {pageContext === 'quotes' ? (
              <QuoteCard item={item} key={item.id} />
            ) : (
              <CardSmall item={item} key={item.id} />
            )}
          </>
        ))}
    </>
  );
};

GetData.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
};

export default withContext(GetData);
