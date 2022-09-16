import { SET_USER_INFOS } from "../actions/actionTypes";

const INITIAL_STATE = {
  user: { name: '', height: 0, weight: 0, imc: 0 },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_INFOS:
      return { ...state, user: { ...action.payload } };
    default:
      return state;
  }
}

export default userReducer;