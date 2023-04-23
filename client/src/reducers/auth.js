import { AUTH,LOGOUT } from '../constants/actionTypes';
const userInfo=JSON.parse(localStorage.getItem('profile'))||null
export default (user=userInfo, action) => {
  switch (action.type) {
    case AUTH:
       localStorage.setItem('profile', JSON.stringify({...action?.data?.result}))
      return {...user, ...action?.data?.result}
    case LOGOUT:
      localStorage.removeItem('profile')
      return null  
    default:
      return user
  }
};
