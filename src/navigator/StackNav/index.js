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
import MIneInfoScreen from '../../screens/Main/TabMine/MineScreen/MIneInfoScreen';
import MineTaskScreen from '../../screens/Main/TabMine/MineScreen/MineTaskScreen';
import MIneInfoDetailScreen from '../../screens/Main/TabMine/MineScreen/MIneInfoDetailScreen';
import MineTaxPreference from '../../screens/Main/TabMine/MineScreen/MineTaxPreference';
import MineIdentityInfo from '../../screens/Main/TabMine/MineScreen/MineIdentityInfo';
import MineLogInScreen from '../../screens/Main/TabMine/MineScreen/MineLogInScreen';
import PublicServerScreen from '../../screens/Main/TabHomeNew/MySearchScreen/PublicServerScreen';

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
                <Stack.Screen name="MySearchScreen" component={MySearchScreen} />
                <Stack.Screen name="SearchView" component={SearchView} />
                <Stack.Screen name="SearchDetailView" component={SearchDetailView} />
                <Stack.Screen name="DetailInfoView" component={DetailInfoView} />
                <Stack.Screen name="MIneInfoScreen" component={MIneInfoScreen} />
                <Stack.Screen name="MineTaskScreen" component={MineTaskScreen} />
                <Stack.Screen name="MIneInfoDetailScreen" component={MIneInfoDetailScreen} />
                <Stack.Screen name="MineTaxPreference" component={MineTaxPreference} />
                <Stack.Screen name="MineIdentityInfo" component={MineIdentityInfo} />
                <Stack.Screen name="MineLogInScreen" component={MineLogInScreen} />
                <Stack.Screen name="PublicServerScreen" component={PublicServerScreen} />

            </Stack.Navigator>
        );
    }
}
