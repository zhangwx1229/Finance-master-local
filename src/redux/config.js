/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 22:19:09
 * @LastEditTime: 2020-08-01 22:44:49
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /lvsejunying/src/redux/config.js
 */
import Immutable from 'immutable';

export const version = {
  default: Immutable.fromJS({}),
  persist: true,
  actions: {
    SET_VERSION: {
      reducer: (state, {payload}) => state.merge(payload),
    },
  },
};

export const profile = {
  default: Immutable.fromJS({
    userId: '',
    username: '',
    avatar: '',
    signup: false,
  }),
  actions: {
    UPDATE_PROFILE: {
      inputs: ['userId', 'username', 'avatar', 'signup'],
      reducer: (state, {payload}) => {
        if (payload.username) {
        }
        return state.merge(payload);
      },
    },
  },
};

export const uiState = {
  default: Immutable.fromJS({}),
  actions: {},
};
