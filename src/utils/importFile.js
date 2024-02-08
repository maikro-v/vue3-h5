// 辅助函数，从文件名中提取不带扩展名的部分
const extractFileName = (filePath) => {
    const fileName = filePath.split('/').pop();
    return fileName.replace(/\.[^/.]+$/, "");
}

export const importFile = async (files) => {
    const res = {}

    // 遍历文件
    for (const path in files) {
        // 使用 import.meta.globEager 获取文件模块
        const module = files[path]();

        // 提取文件名
        const fileName = extractFileName(path);

        res[fileName] = await module
    }

    return res
}