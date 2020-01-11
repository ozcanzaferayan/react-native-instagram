import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from "reducers";
import apiMiddleware from "middleware/api";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};
const sagaMiddleware = createSagaMiddleware()
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = createStore(persistedReducer, applyMiddleware(apiMiddleware, sagaMiddleware, logger));
export const store = createStore(rootReducer, applyMiddleware(apiMiddleware, sagaMiddleware, logger));
// export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga)
