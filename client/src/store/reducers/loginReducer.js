import * as types from "../actions";

export default function (state = [], { type, response, error }) {
  switch (type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        response,
        status: "success",
      };

    case types.LOGIN_USER_ERROR:
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
