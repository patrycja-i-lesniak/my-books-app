import CardSmall from 'components/molecules/Card/CardSmall';
import { useFetchData } from 'customHooks';

const GetAllData = data => {
  const { items } = useFetchData(data);

console.log('items from GetData:',items)

  return <>{items && items.map(item => <CardSmall item={item} key={item.id} />)}</>;
};

export default GetAllData;
