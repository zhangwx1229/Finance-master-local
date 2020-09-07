/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 18:47:11
 * @LastEditTime: 2020-08-06 23:31:33
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/navigator/StackNav/index.js
 */

import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CardStyleInterpolators} from '@react-navigation/stack';
import TabNav from '../TabNav';
import SettingScreen from '../../screens/Main/TabMine/SettingScreen';
import MySearchScreen from '../../screens/Main/TabHomeNew/MySearchScreen';
import SearchView from '../../screens/Main/TabHomeNew/MySearchScreen/SearchView';
import SearchDetailView from '../../screens/Main/TabHomeNew/MySearchScreen/SearchDetailView';

const Stack = createStackNavigator();

export default class StackNav extends Component {
  render() {
    return (
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          animationEnabled: false,
        }}
      >
        <Stack.Screen name="Home" component={TabNav} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="MySearchScreen" component={MySearchScreen} />
        <Stack.Screen name="SearchView" component={SearchView} />
        <Stack.Screen name="SearchDetailView" component={SearchDetailView} />
      </Stack.Navigator>
    );
  }
}
