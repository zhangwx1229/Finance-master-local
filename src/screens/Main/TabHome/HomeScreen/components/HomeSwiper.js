import React, {PureComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import ShadowView from './ShadowView';

export default class HomeSwiper extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons={false} autoplay>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <ShadowView style={styles.shadow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    paddingBottom: 50,
    width: '100%',
  },
  content: {},
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  shadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
