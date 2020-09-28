import { createStore } from "redux";
import { rootReducer, RootState } from "./rootReducer";

export default function configureStore(preloadedState: RootState) {
  const dataRaw = localStorage.getItem("storeData")
  const store = createStoreBaseOnLocalStorage()

  function createStoreBaseOnLocalStorage() {
    if (dataRaw) {
      const storeData = JSON.parse(dataRaw) as RootState
      const storeDateFixed = { ...storeData }
      Object.values(storeData.expenses).forEach(it => {
        storeDateFixed.expenses[it.id].date = new Date(it.date)
      })
      const storeVersion = localStorage.getItem("storeVersion")
      const currentStoreVersion = "1"
      localStorage.setItem("storeVersion", currentStoreVersion)
      return createStore(rootReducer, (storeVersion === currentStoreVersion) ? storeDateFixed : preloadedState)
    } else {
      return createStore(rootReducer, preloadedState)
    }
  }

  store.subscribe(() => {
    localStorage.setItem("storeData", JSON.stringify(store.getState()))
  });
  return store
}
