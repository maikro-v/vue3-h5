import DefaultLayout from "@/layout/default.vue";

const routes = [
    {
        path: "/",
        name: "root",
        component: DefaultLayout,
        redirect: { name: "Index" },
        children: [
            {
                path: "index",
                name: "Index",
                component: () => import("@/views/index/index.vue"),
                meta: {
                    title: "首页"
                }
            }
        ]
    }
];

// 基础路由
const baseRoutes = [
    {
        path: "/404",
        name: "404",
        component: () => import("@/views/error/404.vue"),
        meta: {
            title: "404"
        }
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
]

export default [...routes, ...baseRoutes];
