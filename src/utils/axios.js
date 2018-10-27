import axios from 'axios'
import { resolve } from 'url';
import qs from 'qs'

const instance = axios.create({
    baseURL: 'http://211.67.177.56:8080/hhdj',
    timeout: 15000,
})

// instance.interceptors.request.use(function(config){
//     if (config.method == "post") {
//       config.data = qs.stringify(config.data)
//       config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
//     }
//     return config
//   },function(err){
//     return Promise.reject(err)
//   })


const xhr = {
    get(url,data,config){
        return new Promise((resolve,reject)=>{
            const token = localStorage.getItem('token')
            let computedConfig = {
                ...config
            }
            if(token){
                computedConfig = {
                    headers: {
                        'token': token
                    }
                }
            }
            instance.get(url,{params:data,...computedConfig}).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    fetch(methods,url,data,config){
        return new Promise((resolve,reject)=>{
            const token = localStorage.getItem('token')
            let computedConfig = {
                ...config
            }
            if(token){
                computedConfig = {
                    headers: {
                        'token': token
                    }
                }
            }
            data = qs.stringify(data) 
            instance[methods](url,data,computedConfig).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    // post(url, data, config) {
    //     return this.fetch(url, data, config, 'post')
    //   }  

}
export default xhr