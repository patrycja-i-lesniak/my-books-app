import * as Yup from 'yup';

const validationSchema = 
Yup.object().shape({
  title: Yup.string().required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  imageUrl: Yup.string(),
  series: Yup.string(),
  date: Yup.date(),
  // dateOfBirth: Yup.date(),
  // dateOfDeath: Yup.date(),
  isbn: Yup.number(),
  translation: Yup.string(),
  publishing: Yup.string(),
  numberOfPages: Yup.number(),
  content: Yup.string().required('Required'),
  LClink: Yup.string(),
  // status: Yup.object(),
  // oficialWebsite: Yup.string(),
});

export default validationSchema;

