/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 18:47:11
 * @LastEditTime: 2020-08-06 23:31:33
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/navigator/StackNav/index.js
 */

import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import TabNav from '../TabNav';
import MySearchScreen from '../../screens/Main/TabHomeNew/MySearchScreen';
import SearchView from '../../screens/Main/TabHomeNew/MySearchScreen/SearchView';
import SearchDetailView from '../../screens/Main/TabHomeNew/MySearchScreen/SearchDetailView';
import DetailInfoView from '../../screens/Main/TabHomeNew/MySearchScreen/DetailInfo';
import GestureScreen from '../../screens/Main/TabMine/MineScreen/GestureScreen';
import CivicCentreScreen from '../../screens/Main/TabHomeNew/HomeScreen/CivicCentreScreen';
import AccumulationScreen from '../../screens/Main/TabHomeNew/HomeScreen/AccumulationScreen';
import AccumulationServerScreen from '../../screens/Main/TabHomeNew/HomeScreen/AccumulationServerScreen';
import AccumulationInfoScreen from '../../screens/Main/TabHomeNew/HomeScreen/AccumulationInfoScreen';
import UserScreen from '../../screens/Main/TabHomeNew/HomeScreen/UserScreen';



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
                <Stack.Screen name="GestureScreen" component={GestureScreen} />
                <Stack.Screen name="CivicCentreScreen" component={CivicCentreScreen} />
                <Stack.Screen name="AccumulationScreen" component={AccumulationScreen} />
                <Stack.Screen name="AccumulationServerScreen" component={AccumulationServerScreen} />
                <Stack.Screen name="AccumulationInfoScreen" component={AccumulationInfoScreen} />
                <Stack.Screen name="UserScreen" component={UserScreen} />


                <Stack.Screen name="MySearchScreen" component={MySearchScreen} />
                <Stack.Screen name="SearchView" component={SearchView} />
                <Stack.Screen name="SearchDetailView" component={SearchDetailView} />
                <Stack.Screen name="DetailInfoView" component={DetailInfoView} />
            </Stack.Navigator>
        );
    }
}
