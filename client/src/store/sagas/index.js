import { fork } from "redux-saga/effects";
import watchUserAuthentication from "./watchers";
import watchDashboard from "./watchers";

export default function* startForeman() {
  yield fork(watchUserAuthentication);
  yield fork(watchDashboard);
}
