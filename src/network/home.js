import {request} from './request'


export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
    method: 'get'
  })
}
