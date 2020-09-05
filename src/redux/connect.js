/*
 * @Author: zhangcx01
 * @Date: 2020-08-04 16:41:59
 * @LastEditTime: 2020-08-04 16:42:01
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */
import {connect as connectRedux} from 'react-redux';
import R from 'ramda';

export default function (keys) {
  return connectRedux(R.pick(keys));
}
