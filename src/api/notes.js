import { axiosInstance, apiConfig } from 'api/config';

export const fetchNotes = async () => {
  try {
    const { data: dbData } = await axiosInstance.get(apiConfig.notesList);

    const records = [];
    dbData.records.forEach(note => {
      records.push({
        id: note.id,
        title: note.fields.title,
        imageUrl: note.fields.imageUrl,
        author: note.fields.author,
        date: note.fields.date,
        content: note.fields.content,
      });
    });

    return records;
  } catch (e) {
    console.error(e);
    console.log('Ups... something went wrong');
  }
};
