import request from '@/utils/request'

// 获取主机信息
export function getProperty(page,limit) {
  return request({
    url: `/server/devops/property/${page}/${limit}`,
    method: 'get',
  })
}


// 修改或者添加主机信息
export function modifyProperty(property) {
  if (property.id) {
    return request({
      url: `/server/devops/property/update`,
      method: 'put',
      data:property
    })
  } else {
    return request({
      url: `/server/devops/property/add`,
      method: 'post',
      data:property
    })
  }
}

// 删除主机信息
export function deleteProperty(property) {
    return request({
      url: `/server/devops/property/delete`,
      method: 'post',
      data:property
    })
}