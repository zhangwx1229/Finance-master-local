/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 22:22:54
 * @LastEditTime: 2020-08-01 22:38:57
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */
import {mapValues} from 'lodash';

const middlewares = [];
if (__DEV__) {
  const {createLogger} = require('redux-logger');
  middlewares.push(
    createLogger({
      collapsed: true,
      stateTransformer: (state) =>
        mapValues(state, (s) => (s.toJS ? s.toJS() : s)),
    }),
  );
}

export default middlewares;
