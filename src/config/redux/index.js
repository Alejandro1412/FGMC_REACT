//Packages
import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

//Hooks
import useModels from "../../models";

/*
  useRedux => HOOK
  - This hook exports store and persistor of application
  - blacklist property of persistConfig have a all the name of the reducers in array,
    that you do not want the information to persist
*/
const useRedux = () => {
  // Models
  const { useReducers } = useModels();
  const reducers = useReducers();

  const initialState = {};
  let middlewaresToApply = [thunk];

  const persistConfig = {
    key: "root",
    storage: storage,
    // blacklist: [],
    // whitelist: [],
  };

  const persistReduce = persistReducer(persistConfig, reducers);
  if (process.env.NODE_ENV === "dev") {
    const reduxInmmutableStateInvariant =
      require("redux-immutable-state-invariant").default();
    middlewaresToApply = [...middlewaresToApply, reduxInmmutableStateInvariant];
  }

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let store = createStore(
    persistReduce,
    initialState,
    composeEnhancers(applyMiddleware(...middlewaresToApply))
  );

  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};

export default useRedux;
