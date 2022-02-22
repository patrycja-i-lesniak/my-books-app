import CardSmall from 'components/molecules/Card/CardSmall';
import QuoteCard from 'components/molecules/Card/QuoteCard';
import { useFetchData } from 'customHooks';
import withContext from 'hoc/withContext';

const GetAllData = ({data, pageContext}) => {
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

export default withContext(GetAllData);
