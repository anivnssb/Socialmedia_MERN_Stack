import { AUTH,LOGOUT } from '../constants/actionTypes';
export default (state={}, action) => {
  switch (action.type) {
    case AUTH:
       localStorage.setItem('profile', JSON.stringify({...action?.data}))
      return {...state, authData:action?.data}
    default:
      return state
  }
};
