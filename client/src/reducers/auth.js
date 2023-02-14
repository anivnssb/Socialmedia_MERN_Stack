import { AUTH,LOGOUT } from '../constants/actionTypes';
export default (user={}, action) => {
  switch (action.type) {
    case AUTH:
       localStorage.setItem('profile', JSON.stringify({...action?.data}))
      return {...user, authData:action?.data}
    case AUTH:
      localStorage.removeItem('profile')
      return {}  
    default:
      return user
  }
};
