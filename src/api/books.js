import { axiosInstance, apiConfig } from 'api/config';

export const fetchBooks = async () => {
  try {
    const { data: dbData } = await axiosInstance.get(apiConfig.booksList);

    const records = [];
    dbData.records.forEach(book => {
      records.push({
        id: book.id,
        title: book.fields.title,
        imageUrl: book.fields.imageUrl,
        firstName: book.fields.firstName,
        lastName: book.fields.lastName,
        status: book.fields.status,
        content: book.fields.content,
        numberOfPages: book.fields.numberOfPages,
        date: book.fields.date,
        translation: book.fields.translation,
        publishing: book.fields.publishing,
        isbn: book.fields.isbn,
        series: book.fields.series,
        LClink: book.fields.LClink,
      });
    });

    return records;
  } catch (e) {
    console.error(e);
    console.log('Ups... something went wrong');
  }
};

export const fetchBookDetails = async () => {
  try {
    const { data: dbData } = await axiosInstance.get(`${apiConfig.bookDetails}/${id}}`);

    const {
      id,
      title,
      firstName,
      lastName,
      imageUrl,
      status,
      content,
      numberOfPages,
      date,
      translation,
      publishing,
      isbn,
      series,
      LClink,
    } = dbData.fields;

    return {
      id,
      title,
      firstName,
      lastName,
      imageUrl,
      status,
      content,
      numberOfPages,
      date,
      translation,
      publishing,
      isbn,
      series,
      LClink,
    };
  } catch (e) {
    console.error(e);
    console.log('kjdshkcdksjcjdskvckdsvkhedkjsvhjdfvjkdjvjkdfhkjvhdfjkvhjk');
  }
};
