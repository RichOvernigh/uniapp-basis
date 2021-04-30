/**
 * 此处定义接口
 */

// http库文档地址
// https://www.quanzhan.co/luch-request/

import { http } from '@/services/request';

export const login = async (params:any):Promise<any> => {
  try {
    const res = await http.post('auth/login', params, {
      custom: {
        auth: false, // 是否需要token
        loading: true, // 是否需要loading
        ignoreStatus: false, // 是否忽略status 200判断
      },
    });
    return res;
  } catch (err) {
    return false;
  }
};
export const test = () => {

};
