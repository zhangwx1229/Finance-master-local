/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 18:27:11
 * @LastEditTime: 2020-08-04 18:22:08
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/App.js
 */

import React, {useEffect} from 'react';
import Navigator from './navigator';
import {store, dispatch, Provider} from './redux';
import Splash from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    Splash.hide();
    dispatch('UPDATE_PROFILE', {signup: false});
  }, []);
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
