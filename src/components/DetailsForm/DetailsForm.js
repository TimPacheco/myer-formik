import React from 'react';
import { Formik, Form, Field } from 'formik'
import { useSelector } from 'react-redux';

import { Input } from '../Input/Input'
import { validateAddress, validateWithYup, emailValidation, phoneValidation } from '../../utils/validate'

export const DetailsForm = () => {
  const initialEmail = useSelector(state => state.email)

  const initialValues = {
    email: initialEmail,
    phone: '',
    address: '' 
  }

  return (
    <>
      <h3>Update your info</h3>
      <Formik
        initialValues={{...initialValues}}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert('Details updated');
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          handleSubmit,
          setFieldTouched,
          isSubmitting,
          validateField,
          isValidating
        }) => {
          const handleFieldBlur = (fieldId) => {
            validateField(fieldId)
            setFieldTouched(fieldId)
          }

          return (
            <Form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                validate={() => validateWithYup(emailValidation, values.email)}
                component={Input}
                onBlur={() => handleFieldBlur('email')}
              />

              <label htmlFor="phone">Phone</label>
              <Field
                name="phone"
                validate={() => validateWithYup(phoneValidation, values.phone)}
                component={Input}
                onBlur={() => handleFieldBlur('phone')}
              />

              <label htmlFor="address">Address</label>
              <Field
                name="address"
                validate={validateAddress}
                component={Input}
                onBlur={() => handleFieldBlur('address')}
              />

              <button type="submit" disabled={isSubmitting || isValidating}>
                Update details
              </button>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}