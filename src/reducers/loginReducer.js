import { SET_EMAIL } from '../actions/types';

const initialState = {
  email: 'example@myer.com.au'
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.email
      }
    default:
      return state;
  }
}