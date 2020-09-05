/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 22:24:07
 * @LastEditTime: 2020-08-01 22:26:36
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */

export default function ({persistor, store, actions}) {
  const state = store.getState();
  const appVersion = state.version.get('appVersion');
  console.log('appVersion', appVersion);
}
