import request from '@/utils/request'

export function login(data) {
  console.log("api/login")
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}