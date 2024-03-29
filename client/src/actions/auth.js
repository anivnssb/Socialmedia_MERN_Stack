import * as api from '../api';
import { AUTH,LOGOUT} from '../constants/actionTypes';
export const signIn = (formData,history) => async (dispatch) => {
    try {
      const {data} = await api.signIn(formData)
      dispatch({type:AUTH,data})
      history.push('/')
    } catch (error) {
     console.log(error)
    }
};

export const signUp = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.signUp(formData)
        dispatch({type:AUTH,data})
        history.push('/')
    } catch (error) {
        console.log(error)
    }
};

export const logOut=(history)=>(dispatch)=>{
  try {
    dispatch({type:LOGOUT})
    history.push('/')
  } catch (error) {
    console.log(error)
  }
}