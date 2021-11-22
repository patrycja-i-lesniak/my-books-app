import { axiosInstance, apiConfig } from 'api/config';

export const fetchAuthors = async () => {
  try {
    const { data: dbData } = await axiosInstance.get(apiConfig.authorsList);

    const records = [];
    dbData.records.forEach(author => {
      records.push({
        id: author.id,
        title: author.fields.title,
        imageUrl: author.fields.imageUrl,
        author: author.fields.author,
      });
    });

    return records;
  } catch (e) {
    console.error(e);
    console.log('Ups... something went wrong');
  }
};
