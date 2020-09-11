import {ACTION_TYPES, BASE_URL, LOGIN_URL} from '../../../utils/constants';
import {navigatorPush} from '../../../config/navigationOptions';
import {AreaList, authorization} from '../../../config';

export function initialLogin() {
  dispatch({
    type: ACTION_TYPES.LOGIN_REQUEST,
    payload: '',
  });
}

export function login(userData) {
  return async (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.LOGIN_REQUEST,
      payload: userData,
    });
    try {
      let response = await fetch(`${BASE_URL}${LOGIN_URL}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      let data = await response.json();
      if (data) {
        // alert(JSON.stringify(data))
        if (data.status) {
          dispatch({
            type: ACTION_TYPES.LOGIN_SUCCESS,
            payload: data,
          });
          AreaList();
          // navigatorPush({
          //   componentId: this.props.componentId,
          //   screenName: 'ServiceProviderLocations'
          // });
        } else {
          dispatch({
            type: ACTION_TYPES.LOGIN_ERROR,
            payload: data,
          });
        }
      }
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.LOGIN_ERROR,
        payload: error,
      });
    }
  };
}

export function logout() {
  return async (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.LOGOUT,
    });
    authorization();
  };
}
