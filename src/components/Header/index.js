/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 23:39:07
 * @LastEditTime: 2020-08-01 23:49:50
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */
import React, {PureComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import UI from '../../UI';
import NormalHeader from './lib/NormalHeader';

export default class Header extends PureComponent {
  render() {
    const {title, previous, type} = this.props;
    console.log('previous', previous);
    if (type === 'mine') {
      return <NormalHeader {...this.props} />;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {title} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: UI.color.primary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: UI.color.white,
  },
});
