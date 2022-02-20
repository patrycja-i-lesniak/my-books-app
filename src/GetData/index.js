import CardSmall from 'components/molecules/Card/CardSmall';
import { useFetchData } from 'customHooks';

const GetData = data => {
  const { items } = useFetchData(data);

  return <>{items && items.map(item => <CardSmall item={item} key={item.id} />)}</>;
};

export default GetData;
