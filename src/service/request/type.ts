import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RvRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface RvRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RvRequestInterceptors<T>
  showLoading?: boolean
}
