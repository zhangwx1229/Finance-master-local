/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 18:46:40
 * @LastEditTime: 2020-08-06 23:32:24
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/navigator/index.js
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNav from './StackNav/index';
import connect from '../redux/connect';
import AuthNav from './AuthNav';
import { StatusBar } from 'react-native';
const Stack = createStackNavigator();

@connect(['profile'])
export default class Navigator extends Component {
    constructor() {
        super()
        StatusBar.setBackgroundColor('transparent')
        StatusBar.setBarStyle('dark-content')
        StatusBar.setTranslucent(true);
    }
    render() {
        const { profile } = this.props;
        const isSignup = profile.get('signup') || true;
        return (
            <NavigationContainer>
                <Stack.Navigator
                    headerMode="none"
                    screenOptions={{
                        animationEnabled: false,
                    }}
                    navigationOptions={
                        { headerTransparent: true }
                    }
                >
                    {!isSignup ? (
                        <Stack.Screen name="Auth" component={AuthNav} />
                    ) : (
                            <Stack.Screen name="Main" component={StackNav} />
                        )}
                </Stack.Navigator>
            </NavigationContainer >
        );
    }
}
