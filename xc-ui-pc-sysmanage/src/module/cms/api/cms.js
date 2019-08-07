import http from './../../../base/api/public'
import queryString from 'querystring'
let sysConfig = require ('@/../config/sysConfig')
let  apiUrl = sysConfig.xcApiUrlPre;
export const page_list = (page,size,params) => {
  let query = queryString.stringify(params)
  return http.requestQuickGet(apiUrl+'/cms/page/list/'+page+'/'+size+'/?'+query)
}
export const page_add = params => {
  return http.requestPost(apiUrl+'/cms/page/add',params)
}
