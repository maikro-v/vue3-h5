export const assignParamsInterceptor = (requestConfig) => {
    const { method, data, params } = requestConfig

    // 如果同时存在 data 和 params，同时传递给 Axios 请求
    if (data && params) {
        requestConfig.data = {
            ...data,
            ...params
        }
    } else {
        // 根据请求类型自动分配参数到 data 或 params
        if (method.toLowerCase() === 'get' || method.toLowerCase() === 'delete') {
            requestConfig.params = {
                ...params,
                ...data
            }
        }
    }

    return requestConfig
}
