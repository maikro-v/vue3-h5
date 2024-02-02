module.exports = {
    plugins: {
        // 将px单位转换为视口单位的postcss插件 https://github.com/evrone/postcss-px-to-viewport/blob/HEAD/README_CN.md
        // 使用 cnjm-postcss-px-to-viewport 规避 postcss.plugin was deprecated 警告
        "cnjm-postcss-px-to-viewport": {
            unitToConvert: 'px', // 需要转换的单位，默认为"px"
            viewportWidth: 750, // 根据设计稿设定
            minPixelValue: 1, // 最小的转换数值
            unitPrecision: 2, // 转化精度，转换后保留位数
            mediaQuery: true, // 媒体查询里的单位是否需要转换单位
            exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，值是一个正则表达式，例如 /node_modules/ 下的文件
        },
        autoprefixer: {
            overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"]
        }
    }
}
