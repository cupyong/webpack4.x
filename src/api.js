import axios from 'axios'
import { setTimeout } from 'timers';
var CancelToken = axios.CancelToken;
var cancel;

axios.get('http://localhost:9080/api/productData/realtimeDataOrderSource/-1?token=1513309184&date=2018-05-19', {
    cancelToken: new CancelToken(function executor(c) {
        // executor 函数接收一个 cancel 函数作为参数
        cancel = c;
    })
});
// 取消请求
setTimeout(function(){
    cancel();
},1000)




// let pending = ["/user/12345"]; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
// let cancelToken = axios.CancelToken;
// let removePending = (config) => {
//     for (let p in pending) {
//         if (pending[p].u === config.url + '&' + config.method) { //当当前请求在数组中存在时执行函数体
//             pending[p].f(); //执行取消操作
//             pending.splice(p, 1); //把这条记录从数组中移除
//         }
//     }
// }
// console.log(pending)
// //添加请求拦截器
// axios.interceptors.request.use(config => {
//     removePending(config); //在一个ajax发送前执行一下取消操作
//     config.cancelToken = new cancelToken((c) => {
//         // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
//         pending.push({ u: config.url + '&' + config.method, f: c });
//     });
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

// //添加响应拦截器
// axios.interceptors.response.use(response => {
//     removePending(res.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
//     return response;
// }, error => {
//     return { data: {} }; 
// });
