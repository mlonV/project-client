import request from '@/utils/request'

export function login(data) {
  // console.log(data)  // bu guonh
  return request({
    url: '/user/login',
    method: 'post',
    isForm: true,
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
