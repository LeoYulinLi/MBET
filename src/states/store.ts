import { createStore } from "redux";
import { rootReducer, RootState } from "./rootReducer";

export default function configureStore(preloadedState: RootState) {
  return createStore(rootReducer, preloadedState)
}
