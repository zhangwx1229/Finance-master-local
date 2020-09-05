/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 22:18:19
 * @LastEditTime: 2020-08-01 22:38:18
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/redux/index.js
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';

import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import configureRedux from 'redux-config';

import * as config from './config';
import middlewares from './lib/middlewares';
import updateStore from './lib/updateStore';

export {Provider} from 'react-redux';

const {actions, reducers, persists} = configureRedux(config);
console.info('[Redux] store to persist', persists);

export default actions;
export const store = createStore(
  persistReducer(
    {
      key: 'root',
      storage: AsyncStorage,
      whitelist: persists,
      transforms: [immutableTransform()],
    },
    combineReducers(reducers),
  ),
  applyMiddleware(...middlewares),
);

export function onLoadRedux(onComplete) {
  const persistor = persistStore(store, null, () => {
    // update store due to app update
    updateStore({persistor, store, actions});
    onComplete(store.getState());
  });
}

export function dispatch(action, params) {
  store.dispatch(actions[action](params));
}
