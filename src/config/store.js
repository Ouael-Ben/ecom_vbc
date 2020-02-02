import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";
import reducers from "./reducers";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


const sagaMiddleware = createSagaMiddleware();

const store  = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(mySaga);

export default store;
