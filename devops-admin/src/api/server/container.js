import request from '@/utils/request'

// 获取主机上的容器信息，分页查询
export function getContainer(page,limit,query) {
  return request({
    url: `/server/devops/container/${page}/${limit}`,
    method: 'post',
    data:query
  })
}

// 操作容器重启
export function Operate(value) {
  return request({
    url: `/server/devops/container/reload`,
    method: 'post',
    data:value
  })
}



// 获取主机信息，IP列表，hostname列表等
export function GetFilter() {
  return request({
    url: `/server/devops/container/getfilter`,
    method: 'get',
  })
}

// 加载/更新主机上的容器信息
export function LoadAllContainer(hostArr) {
  return request({
    url: `/server/devops/container/load`,
    method: 'post',
    data: hostArr
  })
}