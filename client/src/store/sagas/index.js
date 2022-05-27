import { fork } from "redux-saga/effects";
import watchUserAuthentication from "./watchers";

export default function* startForeman() {
  yield fork(watchUserAuthentication);
}
