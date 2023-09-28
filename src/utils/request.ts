import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios'
import { message } from 'antd'

// interface IResponese<T = any> {
//   code: number
//   message: string
//   data: T
// }

class HttpClient {
  private instance: AxiosInstance
  constructor(baseURL?: string) {
    this.instance = axios.create({ baseURL })
    this.instance.interceptors.request.use(this.setAuthorization)
    this.instance.interceptors.response.use(
      this.handleSuccessResponse,
      this.handleErrorResponse,
    )
  }

  private setAuthorization(config: InternalAxiosRequestConfig) {
    const token = 'token'
    config.headers.Authorization = token
    return config
  }

  private handleSuccessResponse(response: AxiosResponse): AxiosResponse {
    return response
  }

  private handleErrorResponse(error: any): Promise<never> {
    message.error(error.message || '请求失败')
    return Promise.reject(error)
  }

  public async request<T = any>(requestConfig: AxiosRequestConfig): Promise<T> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<T>(requestConfig)
        resolve(response.data)
      } catch (error: any) {
        if (error?.response?.data?.errCode === '401') {
          // logout
          reject('登录过期')
        }

        reject(error)
      }
    })
  }
}

const http = new HttpClient(import.meta.env.VITE_APP_BASE_URL)

export default http
