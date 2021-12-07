import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required field is empty'),
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required field is empty'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required field is empty'),
  imageUrl: Yup.string().default(),
  series: Yup.string().default(),
  date: Yup.date().default(),
  dateOfBirth: Yup.date().default(),
  dateOfDeath: Yup.date().default(),
  isbn: Yup.number('Must be a number').default(),
  translation: Yup.string().default(),
  publishing: Yup.string().default(),
  numberOfPages: Yup.number('Must be a number').default(),
  content: Yup.string().required('Required'),
  LClink: Yup.string().default(),
  status: Yup.string().oneOf(['read', 'to read', 'to buy', 'borrowed', 'in progress']).default(),
  oficialWebsite: Yup.string().default(),
});

export default validationSchema;
