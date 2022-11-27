import axios, { AxiosRequestConfig } from "axios";

type requestOptions = AxiosRequestConfig & {
  url: string,
  method?: string,
  headers?: any,
  data?: any,
}

// 拦截器
axios.interceptors.response.use(
  // 响应拦截
  (response: any) => {
    if (response.status === 200) {
      return response.data
    }
  },
  // 错误拦截
  (error: any) => {
    const { response } = error
    if (response) {
      const { status, data } = response;
      if (status === 400 || status === 401) {
        console.log('data', data)
        return Promise.reject(data.data)
      }
      // return Promise.reject(errorMsg)
      // 请求超时
      if (error.code === 408) {
        const timeoutMsg = '请求超时，请稍后再试'
        return Promise.reject(timeoutMsg)
      }
      const networkErrorMsg = '您的网络出现问题，请检查网络重试'
      return Promise.reject(networkErrorMsg)
    }
  }
)

export const request = async ({ url, method = 'get', headers, data }: requestOptions) => {
  const options = {
    headers: {...headers},
    credentials: 'include',
    timeout: 100000,
    withCredentials: true,
    validateStatus(status: any): boolean {
      return status >= 200 && status <= 300
    },
    method,
    data: data || {}
  }
  return axios(url, options);
}
