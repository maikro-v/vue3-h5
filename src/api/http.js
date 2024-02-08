import { createAxiosPlus } from '@/utils/axiosPlus'

/**
 * createAxiosPlus方法封装与axios.create，参数和axios.create一致 https://www.axios-http.cn/docs/req_config
 * 
 * @returns {AxiosInstance} axiosInstance axios实例（https://www.axios-http.cn/docs/instance）
 * @returns {Function} http http闭包函数 参数与axios.request参数一致（https://www.axios-http.cn/docs/req_config），返回一个方法用于传递接口参数，该参数与axios.request参数一致
 */
const axiosPlusInstance = createAxiosPlus({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    // headers: {
    //     'Content-Type': 'application/json',
    //     // 其他自定义 headers...
    // },
    timeout: 10000, // 自定义超时时间
}, {
    assignParams: true,
    assignUrlArgs: true
})

// 拦截器
axiosPlusInstance.interceptors.response.use((response) => {
    const { data: responseData } = response

    const { code, data } = responseData

    if (code != 200) {
        return Promise.reject(responseData)
    }

    return data
})

export default axiosPlusInstance.http
