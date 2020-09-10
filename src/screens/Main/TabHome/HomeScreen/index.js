/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 21:47:17
 * @LastEditTime: 2020-08-01 21:48:00
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/screens/TabHome/HomeScreen/index.js
 */
import React, { PureComponent } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import HomeHeader from './components/HomeHeader';
import HomeSwiper from './components/HomeSwiper';
import Anounce from './components/Anounce';
import HotTopic from './components/HotTopic';
import UI from '../../../../UI';
import CommonBusiness from './components/CommonBusiness';
export default class HomeScreen extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainerStyle}
        >
          <HomeSwiper />
          <Anounce />
          <HotTopic />
          <CommonBusiness />
          <View style={styles.textView}>
            <Text> HomeScreen </Text>
          </View>
          <View style={styles.textView}>
            <Text> HomeScreen </Text>
          </View>
          <View style={styles.textView}>
            <Text> HomeScreen </Text>
          </View>
          <View style={styles.textView}>
            <Text> HomeScreen </Text>
          </View>
          <View style={styles.textView}>
            <Text> HomeScreen </Text>
          </View>
          <View style={styles.textView}>
            <Text> HomeScreen </Text>
          </View>
          <View style={styles.textView}>
            <Text> HomeScreen </Text>
          </View>
          <View style={styles.textView}>
            <Text> HomeScreen </Text>
          </View>
          <View style={styles.textView}>
            <Text> HomeScreen </Text>
          </View>
        </ScrollView>
        <HomeHeader style={styles.header} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(255,0,255,0.2)',
  },
  content: { flex: 1 },
  contentContainerStyle: {
    backgroundColor: UI.color.background,
  },
  textView: {
    height: 80,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30 * UI.size.windowScale,
    fontWeight: 'bold',
  },
});
