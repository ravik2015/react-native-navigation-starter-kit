import {ACTION_TYPES} from '../../utils/constants';

const INITIAL_STATE = {
  loading: false,
  getMessage: false,
  messageData: null,
  imageLoading: false,
  imageData: null,
  msgCount: 0,
  getCount: false,
};

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.INITIAL_REQUEST:
      return Object.assign({}, state, {
        loading: false,
        appIntro: false,
      });
    case ACTION_TYPES.SET_LANGUAGE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        currentLanguage: action.payload,
      });
    default:
      return state;
  }
}

export default appReducer;
