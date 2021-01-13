/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 21:35:33
 * @LastEditTime: 2020-08-07 00:02:41
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/navigator/TabNav/index.js
 */
import React from 'react';
import { Image, StyleSheet, DeviceEventEmitter } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Main/TabHomeNew/HomeScreen';
import MineScreen from '../../screens/Main/TabMine/MineScreen';
import UI from '../../UI';
import ServiceScreen from '../../screens/Main/TabService/ServiceScreen';
import TaxScreen from '../../screens/Main/TabTax/TaxScreen';
import MessageScreen from '../../screens/Main/TabMessage';
import Images from '../../image';
const Tab = createBottomTabNavigator();

export default class TabNav extends React.Component {
    componentDidMount() {
        this.istener = DeviceEventEmitter.addListener('FontChange', this.fontChange)
    }
    fontChange = () => {
        this.setState({});
    }
    componentWillUnmount() {
        this.istener.remove()
    }

    render() {
        const font = UI.fontSizeNew.font_7;
        let labelStyle = {}
        if (font) {
            labelStyle = { fontSize: font, marginBottom: 6, marginTop: -5 }
        }
        return < Tab.Navigator
            initialRouteName={'Note'}
            tabBarOptions={{
                activeTintColor: '#cd3a40',
                inactiveTintColor: '#333333',
                labelStyle: labelStyle,

            }}
        >
            <Tab.Screen
                name="Note"
                component={ServiceScreen}
                options={{
                    tabBarLabel: '主页',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={
                                focused ? Images.tab_service_selected : Images.tab_service
                            }
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Learn"
                component={TaxScreen}
                options={{
                    tabBarLabel: '办事',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={focused ? Images.tab_tax_selected : Images.tab_tax}
                            style={styles.icon}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="TabHome"
                component={HomeScreen}
                options={{
                    tabBarLabel: '消息',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={focused ? Images.tab_home_selected : Images.tab_home}
                            style={styles.icon}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Mine"
                component={MineScreen}
                options={{
                    tabBarLabel: '我的',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={focused ? Images.tab_mine_selected : Images.tab_mine}
                            style={styles.icon}
                        />
                    ),
                }}
            />
        </Tab.Navigator >
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 23,
        height: 23,
    },
});
