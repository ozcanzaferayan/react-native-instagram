import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from "reducers";
import apiMiddleware from "middleware/api";
import logger from 'redux-logger'

// const store = createStore(rootReducer, applyMiddleware(apiMiddleware, logger));
// window.store = store;
// export default store;

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(apiMiddleware, logger));
export const persistor = persistStore(store);
// export default () => {
//     let store = createStore(persistedReducer, applyMiddleware(apiMiddleware, logger));
//     let persistor = persistStore(store);
//     return { store, persistor };
// };