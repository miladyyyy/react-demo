import http from '../utils/request'
import { Response } from './model/base-model'

export function getPet(petId: number) {
  return http.request<Response>({
    url: `/pet/${petId}`,
    method: 'GET',
  })
}
