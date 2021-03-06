import Masonry from 'react-masonry-css';

import './styles.css';
import GridTemplate from 'templates/GridTemplate';
import { useFetchData } from 'customHooks';
import { QuoteCardSmall } from 'components/molecules/Card/index';
import LoaderSmall from 'components/atoms/LoaderSmall';
import Error from 'components/atoms/Error';

const Quotes = () => {
	const data = {
		table: 'quotes',
		pageSize: 100,
		sort: [ { field: 'author', direction: 'asc' } ],
		filterByFormula: ''
	};

	const breakpointColumnsObj = {
		default: 3,
		850: 2,
		500: 1
	};

	const { items } = useFetchData(data);

	return (
		<GridTemplate pageType="quotes">
			{items.status === 'loading' ? (
				<LoaderSmall />
			) : items.status === 'error' ? (
				<Error reloadButton />
			) : (
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{items.map((item) => <QuoteCardSmall item={item} key={item.id} />)}
				</Masonry>
			)}
		</GridTemplate>
	);
};

export default Quotes;
