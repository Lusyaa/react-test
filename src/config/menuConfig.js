import { UserOutlined, VideoCameraOutlined, AppstoreOutlined } from "@ant-design/icons";
const menuList = [
    {
        key: 'sub1',
        title: '首页',
        icon: <UserOutlined />,
        path: '/homePage',
        sourcePath: 'views/homePage',
        children: []
    },
    {
        key: 'sub2',
        title: '应用管理',
        icon: <AppstoreOutlined />,
        path: '/application',
        children: [{
            key: '1',
            title: '应用列表',
            path: '/appList',
            sourcePath: 'views/application/appList',
        }, {
            key: '2',
            title: '应用角色管理',
            path: '/appRoles',
            sourcePath: 'views/application/appRoles',
        }, {
            key: '3',
            title: '应用审核',
            path: '/appListReview',
            sourcePath: 'views/application/appListReview',
        }]
    },
    {
        key: 'sub3',
        title: '组织机构管理',
        icon: <VideoCameraOutlined />,
        path: '/organization ',
        children: [{
            key: '5',
            title: '服务管理',
            path: '/service',
            sourcePath: 'views/organization/service',
        }, {
            key: '6',
            title: '组织机构',
            path: '/organ',
            sourcePath: 'views/organization/organ',
        }, {
            key: '7',
            title: '用户管理',
            path: '/user',
            sourcePath: 'views/organization/user',
        }, {
            key: '8',
            title: '区域管理',
            path: '/region',
            sourcePath: 'views/organization/region',
        }]
    }];

export default menuList;
