import * as Yup from 'yup';

Yup.addMethod(Yup.date, 'stripEmptySDate', function () {
  return this.transform(value => (value === '' ? undefined : value));
});

export const bookValidationSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required field is empty'),
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required field is empty'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required field is empty'),
  imageUrl: Yup.string().notRequired(),
  series: Yup.string().notRequired(),
  date: Yup.date().notRequired(),
  isbn: Yup.number('Must be a number').notRequired(),
  translation: Yup.string().notRequired(),
  publishing: Yup.string().notRequired(),
  numberOfPages: Yup.number('Must be a number').notRequired(),
  content: Yup.string().required('Required field is empty'),
  LClink: Yup.string().notRequired(),
  status: Yup.string()
    .oneOf(['read', 'to read', 'to buy', 'borrowed', 'in progress'])
    .notRequired(),
});

export const authorValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required field is empty'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required field is empty'),
  imageUrl: Yup.string().required('Required field is empty'),
  content: Yup.string().required('Required field is empty'),,
  oficialWebsite: Yup.string().default(),
});

export const noteValidationSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required field is empty'),
  imageUrl: Yup.string().notRequired(),
  date: Yup.date().nullable().notRequired(),
  content: Yup.string().required('Required field is empty'),
});