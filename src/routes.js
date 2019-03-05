import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'

import menuManage from './views/menu/index.vue'  //菜品管理
import menuList from './views/menu/list.vue'  //菜品列表

import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/analysis',
        component: Home,
        name: '数据分析',
        iconCls: 'el-icon-view',//图标样式class
        children: [
            { path: '/businessAnalysis', component: Main, name: '营业分析', hidden: false },
            { path: '/memberAnalysis', component: Table, name: '会员分析' },
            { path: '/meanAnalysis', component: Form, name: '菜品分析' },
        ]
    },
    {
        path: '/menu',
        component: Home,
        name: '菜品管理',
        leaf: true,//只有一个节点
        iconCls: 'el-icon-setting',//图标样式class
        children: [
            { path: '/menuManage', component: menuManage, name: '菜品管理' }
        ]
        
    },
    {
        path: '/menu',
        component: Home,
        hidden: true,
        name: '菜品管理',
        leaf: true,//只有一个节点
        iconCls: 'el-icon-setting',//图标样式class
        children: [
            { path: '/menuList', component: menuList, name: '菜品管理' }
        ]
    },
    {
        path: '/tables',
        component: Home,
        name: '桌台管理',
        leaf: true,//只有一个节点
        iconCls: 'el-icon-setting',//图标样式class
        children: [
            { path: '/page3', component: Page6, name: '桌台管理' }
        ]
    },
    {
        path: '/member',
        component: Home,
        leaf: true,//只有一个节点
        name: '会员管理',
        iconCls: 'el-icon-setting',//图标样式class
        children: [
            { path: '/page4', component: Page6, name: '会员管理' }
        ]
    },
    {
        path: '/marketing',
        component: Home,
        name: '营销管理',
        leaf: true,//只有一个节点
        iconCls: 'el-icon-setting',//图标样式class
        children: [
            { path: '/page5', component: Page6, name: '营销管理' }
        ]
    },
    {
        path: '/employee',
        component: Home,
        name: '员工管理',
        leaf: true,//只有一个节点
        iconCls: 'el-icon-setting',//图标样式class
        children: [
            { path: '/page6', component: Page6, name: '员工管理' }
        ]
    },
    {
        path: '/store',
        component: Home,
        name: '店铺配置',
        leaf: true,//只有一个节点
        iconCls: 'el-icon-setting',//图标样式class
        children: [
            { path: '/page7', component: Page6, name: '店铺配置' }
        ]
    },

    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;