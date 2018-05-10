const routers = [{
    path: '/',
    meta: {
        title: '',
        breadcrumbs: ['首页']
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}, {
    path: '/create',
    meta: {
        title: '创建宠物卡',
        breadcrumbs: ['创建宠物卡']
    },
    component: (resolve) => require(['./views/create.vue'], resolve)
}, {
    path: '/search/:id',
    meta: {
        title: '搜索结果',
        breadcrumbs: ['搜索结果']
    },
    component: (resolve) => require(['./views/search.vue'], resolve)
}, {
    path: '/detail/:id',
    meta: {
        title: '宠物卡详情',
        breadcrumbs: ['宠物卡详情']
    },
    component: (resolve) => require(['./views/detail.vue'], resolve)
}];
export default routers;