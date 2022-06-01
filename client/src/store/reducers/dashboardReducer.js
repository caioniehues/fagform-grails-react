import * as types from "../actions";

export default function (state = [], { type, response, error }) {
  switch (type) {
    case types.DASHBOARD_SUCCESS:
      return {
        ...state,
        response,
        status: "success",
      };

    case types.DASHBOARD_ERROR:
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
