import { importFile } from "@/utils/importFile";

const apis = await importFile(import.meta.glob('./modules/**.js'))

const install = (app) => {
    app.$api = apis
}

export default {
    install,
    ...apis
}
