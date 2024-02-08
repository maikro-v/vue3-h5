import axios from 'axios'
import { assignUrlArgsInterceptor } from './interceptor/assignUrlArgsInterceptor'
import { assignParamsInterceptor } from './interceptor/assignParamsInterceptor'

/**
 * 创建 Axios 实例的工厂函数
 * @param {import('axios').CreateAxiosDefaults} [createAxiosDefaults] axios的配置选项
 * @param {Object} [config] 
 * @param {Boolean} config.assignParams=true 根据请求类型自动将data参数分配给params或data
 * @param {Boolean} config.assignUrlArgs=true 自动从请求参数的args中查找路径参数 args: { name=1 } /api/test/{name} => /api/test/1
 * @returns 
 */
const createAxiosPlusInstance = (createAxiosDefaults, config) => {
    const instance = axios.create(createAxiosDefaults)
    const { assignParams = true, assignUrlArgs = true } = config

    if (assignUrlArgs) {
        instance.interceptors.request.use(assignUrlArgsInterceptor)
    }
    if (assignParams) {
        instance.interceptors.request.use(assignParamsInterceptor)
    }
    
    return {
        ...instance,
        http: (axiosRequestConfig = {}) => {
            return async (requestConfig = {}) => {
                // 合并传入的请求配置和默认配置
                const mergedConfig = {
                    ...axiosRequestConfig,
                    ...requestConfig,
                    headers: {
                        ...axiosRequestConfig?.headers,
                        ...requestConfig?.headers,
                    },
                };
        
                try {
                    // 使用 Axios 实例发送请求
                    const response = await instance.request(mergedConfig);
                    return { err: null, data: response };
                } catch (err) {
                    return { err, data: null };
                }
            }
        }
    }
}

export const createAxiosPlus = createAxiosPlusInstance
