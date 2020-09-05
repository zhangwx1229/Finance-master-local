/*
 * @Author: zhangcx01
 * @Date: 2020-08-04 17:22:53
 * @LastEditTime: 2020-08-04 17:27:55
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import UI from '../../UI';

export default function Button(props) {
  const {title, onPress, style} = props;
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.container, style])}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: UI.color.primary,
  },
  title: {
    color: UI.color.white,
  },
});
