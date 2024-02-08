export const assignUrlArgsInterceptor = (config) => {
    const { url, args } = config;
    if (args) {
        const lostParams = [];
        const replacedUrl = url.replace(/\{([^}]+)\}/g, (res, arg) => {
            if (!args[arg]) {
                lostParams.push(arg);
            }
            return args[arg];
        });
        if (lostParams.length) {
            return Promise.reject(new Error('在args中找不到对应的路径参数'));
        }
        return { ...config, url: replacedUrl };
    }
    return config;
}
