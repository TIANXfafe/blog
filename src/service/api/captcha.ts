import { request } from '../../util/request';

import { baseUrl } from "../../config/config";

export const getCaptchaImage = () => {
  return request({
    url: `${baseUrl}/captcha`
  })
}
