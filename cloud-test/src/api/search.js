import request from '@/utils/request'
// import qs from 'qs'

// 技术领域
export const getScience = (params) => {
  return request({
    method: 'get',
    url: 'https://service.test.nttcc.com.cn/api/v1/technical/list',
    params
  })
}
// 服务类型
export const getService = (params) => {
  return request({
    method: 'get',
    url: 'https://service.test.nttcc.com.cn/admin/api/v1/service_type/ladderlist',
    params
  })
}
// https://service.test.nttcc.com.cn/api/v1/service/list?pageNum=1&pageSize=10&keywords=&serviceTypeId=&serviceTypeId2=&technicalId=&province=&dataOrigin=&logicStatus=1
// 服务类型
export const geTableData = (params) => {
  return request({
    method: 'get',
    url: 'https://service.test.nttcc.com.cn/api/v1/service/list',
    params
  })
}
