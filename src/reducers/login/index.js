import {ACTION_TYPES} from '../../utils/constants';

const INITIAL_STATE = {
  loading: false,
  loginSuccess: false,
  loginError: false,
  isError: false,
  status: false,
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.LOGOUT:
      return INITIAL_STATE;
    case ACTION_TYPES.LOGIN_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        loginSuccess: false,
        loginError: false,
        isError: false
      });
    case ACTION_TYPES.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        loginSuccess: action.payload,
        isError: false
      });
    case ACTION_TYPES.LOGIN_ERROR:
      return Object.assign({}, state, {
        loading: false,
        loginError: action.payload,
        isError: true
      });
    default:
      return state;
  }
}

export default loginReducer;
