/*
 * @Author: Code-HHX
 * @Date: 2022-03-24 10:46:18
 * @LastEditors: Code-HHX
 * @LastEditTime: 2022-04-01 17:49:10
 * @Description: Test
 */

import {
  requestGet,
  requestPost,
  requestPostForm,
  requestFileUpload
} from "../config/http-json";

const test = {
  async testInterface(params) {
    let response = await requestPost("/test/add", params);
    return response;
  }
};

export default test;
