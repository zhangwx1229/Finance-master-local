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
