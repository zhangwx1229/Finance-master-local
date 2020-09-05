/*
 * @Author: zhangcx01
 * @Date: 2020-08-06 23:37:02
 * @LastEditTime: 2020-08-06 23:42:58
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */
import React, {memo} from 'react';
import {View} from 'react-native';

function Container(props) {
  const {style} = props;
  return <View style={style}>{props.children}</View>;
}
export default memo(Container);
