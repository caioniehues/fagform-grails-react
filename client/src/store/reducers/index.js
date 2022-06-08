import { combineReducers } from "redux";

import register from "./registerReducer";
import login from "./loginReducer";
import dashboard from "./dashboardReducer";
import changePassword from "./changePasswordReducer";

const rootReducer = combineReducers({
  register,
  login,
  dashboard,
  changePassword,
});

export default rootReducer;
