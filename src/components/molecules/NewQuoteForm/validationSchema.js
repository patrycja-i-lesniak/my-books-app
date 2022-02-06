import * as Yup from 'yup';

Yup.addMethod(Yup.date, 'stripEmptySDate', function () {
  return this.transform(value => (value === '' ? undefined : value));
});

export const validationSchema = Yup.object().shape({
  quote: Yup.string().required('Required field is empty'),
  author: Yup.string().min(2, 'Too Short!'),
  title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  checked:  Yup.boolean().oneOf([true, false]),
});
