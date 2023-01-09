import axios from 'axios'
import Vue from 'vue'

//超时时间
axios.defaults.timeout = 20000
//允许跨域携带cookie
axios.defaults.withCredentials = true;
 
// export const uploadelf = () => {
//     return axios.request({
//         method: 'post',
//         url: 'http://xxxxx.xxx/api/uploadelf'
//     })
// }
 
// export const start = () => {
//     return axios.request({
//         method: 'get',
//         url: 'http://xxxxx.xxx/api/start'
//     })
// }
 
// export const getDisassemble = (funName = 'main') => {
//     return axios.request({
//         method: 'post',
//         url: 'http://xxxxx.xxx/api/disassemble',
//         data: {
//             funName
//         }
//     })
// }