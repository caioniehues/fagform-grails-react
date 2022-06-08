import * as types from "../actions";

export default function (state = [], { type, response, error }) {
  switch (type) {
    case types.CHANGE_PASSWORD_USER_SUCCESS:
      return {
        ...state,
        response,
        status: "success",
      };

    case types.CHANGE_PASSWORD_USER_ERROR:
      return {
        ...state,
        response,
        error,
        status: "error",
      };

    default:
      return state;
  }
}