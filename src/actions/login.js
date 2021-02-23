import { SET_EMAIL } from './types';

export const setEmail = (email) => (
  {
    type: SET_EMAIL,
    email
  }
)