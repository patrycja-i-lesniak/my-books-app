import { axiosInstance, apiConfig } from 'api/config';


export const fetchBooks = async () => {
  try {
    const {data: dbData} = await axiosInstance.get(apiConfig.booksList);

const records = [];
dbData.records.forEach(book => {
  records.push({
    id: book.id,
    title: book.fields.title,
    imageUrl: book.fields.imageUrl,
    author: book.fields.author,
  });
});
console.log(records);

return records;
  } catch (e) {
    console.error(e);
    console.log('Fucking bugs!!!!!')
  }
}
