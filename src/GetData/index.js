import PropTypes from 'prop-types';

import { CardSmall, QuoteCard, QuoteCardSmall } from 'components/molecules/Card/index';
import { useFetchData } from 'customHooks';

const GetData = data => {
  const { items } = useFetchData(data);

  console.log('items from GetData:', items);

  return <>{items && items.map(item => <CardSmall item={item} key={item.id} />)}</>;
};

GetData.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
};

export default GetData;
