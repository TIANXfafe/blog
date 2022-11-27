import { request } from '../../util/request';

import { baseUrl } from "../../config/config";

// 获取图片验证码
export const getCaptchaImage = () => {
  return request({
    url: `${baseUrl}/captcha`
  })
}
// 获取计算表达式验证码
export const getFormulaCaptcha = () => {
  return request({
    url: `${baseUrl}/captcha/get-formula-captcha`
  })
}
