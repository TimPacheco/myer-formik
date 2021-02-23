import * as Yup from 'yup';

export const emailValidation = Yup.string()
  .required('Please enter your email')
  .email('The email format is invalid');

const passwordValidation = Yup.string()
  .min(2, 'Password must be longer than 2 characters')
  .max(30, 'Password must be shorter than 30 characters')
  .required('Please enter your password');

export const phoneValidation = Yup.string()
  .required('Please enter your phone number')
  .length(10, 'Phone must be 10 digits')

export const loginValidationSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation
});

export const validateWithYup = async (schema, value) => {
  let error = undefined

  await schema.validate(value).catch(function (err) {
    error = err.errors[0]
  })

  return error
}

export const validateAddress = async (value) => {
  let error = undefined;

  const addressOnServer = await fetch('https://myer-710ab-default-rtdb.firebaseio.com/address.json')
  .then(response => response.json())
  .then(data => data);

  if (value !== addressOnServer) {
    error = `Address must be '${addressOnServer}'`;
  }
  return error;
}
