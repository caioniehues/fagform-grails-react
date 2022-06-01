import * as types from "./index";

export const dashboardAction = (list) => {
  return {
    type: types.DASHBOARD,
    list,
  };
};
