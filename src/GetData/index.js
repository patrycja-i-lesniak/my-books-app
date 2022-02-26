import PropTypes from 'prop-types';

import { CardSmall, QuoteCard, QuoteCardSmall } from 'components/molecules/Card/index';
import { useFetchData } from 'customHooks';
import withContext from 'hoc/withContext';

import Masonry from 'react-masonry-css';
import './styles.css';

const breakpointColumnsObj = {
  default: 3,
  900: 2,
  600: 1,
};

const GetData = ({ data, pageContext }) => {
  const { items } = useFetchData(data);

  const MasonryLayout = () => {
    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items.map(item => (
          <QuoteCardSmall item={item} key={item.id} />
        ))}
      </Masonry>
    );
  };

  const OtherPages = () => {
    return items.map(item => <CardSmall item={item} key={item.id} />);
  };

  return <>{pageContext === 'quotes' ? <MasonryLayout /> : <OtherPages />}</>;
};

GetData.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
};

export default withContext(GetData);
