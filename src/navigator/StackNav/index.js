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
import AccumulationScreenNew from '../../screens/Main/TabService/common/AccumulationScreen';
import AccumulationInfoScreen from '../../screens/Main/TabService/common/AccumulationInfoScreen';
import SocialSecurityScreen from '../../screens/Main/TabService/common/SocialSecurityScreen';
import SocialSecuritySearchScreen from '../../screens/Main/TabService/common/SocialSecuritySearchScreen';
import SocialAllScreen from '../../screens/Main/TabService/common/SocialAllScreen';
import RealEstateSearchScreen from '../../screens/Main/TabService/common/RealEstateSearchScreen';
import FaceRecognitionScreen from '../../screens/Main/TabService/common/FaceRecognitionScreen';
import RealEstateDetailScreen from '../../screens/Main/TabService/common/RealEstateDetailScreen';
import RealEstateSearchDetailScreen from '../../screens/Main/TabService/common/RealEstateSearchDetailScreen';
import LoginScreen from '../../screens/Main/TabService/common/LoginScreen';

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
                <Stack.Screen name="AccumulationScreenNew" component={AccumulationScreenNew} />
                <Stack.Screen name="AccumulationInfoScreen" component={AccumulationInfoScreen} />
                <Stack.Screen name="SocialSecurityScreen" component={SocialSecurityScreen} />
                <Stack.Screen name="SocialSecuritySearchScreen" component={SocialSecuritySearchScreen} />
                <Stack.Screen name="SocialAllScreen" component={SocialAllScreen} />
                <Stack.Screen name="RealEstateSearchScreen" component={RealEstateSearchScreen} />
                <Stack.Screen name="FaceRecognitionScreen" component={FaceRecognitionScreen} />
                <Stack.Screen name="RealEstateDetailScreen" component={RealEstateDetailScreen} />
                <Stack.Screen name="RealEstateSearchDetailScreen" component={RealEstateSearchDetailScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                
            </Stack.Navigator>
        );
    }
}
