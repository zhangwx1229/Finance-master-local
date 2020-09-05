/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 23:53:09
 * @LastEditTime: 2020-08-02 00:03:35
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */
const dev_url = '';
const prod_url = '';
const env = 'dev';
// const env = 'prod'
const BASEURL = env === 'dev' ? dev_url : prod_url;

// 用户相关
export const user_url = {
  login: `${BASEURL}/login`,
  register: `${BASEURL}/register`,
  userIndo: `${BASEURL}/info`,
};

// 审批相关
export const Approve = {};
