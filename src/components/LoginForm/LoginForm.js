import React from 'react';
import { Formik, Form, Field } from 'formik'
import { useSelector, useDispatch } from 'react-redux';
import { setEmail } from '../../actions/login';
import { Input } from '../Input/Input';
import { loginValidationSchema } from '../../utils/validate'

export const LoginForm = ({changeFormPage}) => {
  const initialEmail = useSelector(state => state.email)

  const dispatch = useDispatch()

  const updateEmail = (email) => {
    dispatch(setEmail(email))
  }

  const initialValues = {
    email: initialEmail,
    password: ''
  }

  return (
    <>
      <h3>Please enter your login details</h3>
      <Formik
        initialValues={{...initialValues}}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            updateEmail(values.email)
            changeFormPage(2)
          }, 400);
        }}
      >
        {({
          handleSubmit,
          isSubmitting,
          isValidating
        }) => {

          return (
            <Form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                component={Input}
              />

              <label htmlFor="password">Password</label>
              <Field
                name="password"
                component={Input}
              />

              <button type="submit" disabled={isSubmitting || isValidating}>
                Login
              </button>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}