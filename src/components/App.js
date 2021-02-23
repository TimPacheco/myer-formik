import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import './App.css';

import { LoginForm } from './LoginForm/LoginForm';
import { DetailsForm } from './DetailsForm/DetailsForm';

export const App = () => {

  const [ formPage, setFormPage ] = useState(1)

  return (
    <Provider store={store}>
      {formPage === 1 && <LoginForm changeFormPage={setFormPage} />}
      {formPage === 2 && <DetailsForm />}
    </Provider>
  )
}
