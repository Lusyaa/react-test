"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var menuList = [{
  title: "首页",
  path: "/homePage",
  icon: "icon-home",
  localIcon: true,
  sourcePath: "views/homePage",
  children: [],
  roles: ["admin", "editor", "guest"]
}, {
  title: "应用管理",
  path: "/application",
  icon: "icon-appManage",
  localIcon: true,
  sourcePath: "views/application",
  children: [{
    title: "应用列表",
    path: "/appList",
    icon: "FileOutlined",
    sourcePath: "views/application/appList",
    children: []
  }, {
    title: "应用角色管理",
    path: "/appRoles",
    icon: "UserOutlined",
    sourcePath: "views/application/appRoles",
    children: []
  }, {
    title: "应用审核",
    path: "/appListReview",
    icon: "SearchOutlined",
    sourcePath: "views/application/appListReview",
    children: []
  }],
  roles: ["admin", "editor", "guest"]
} // {
//     title: "组织机构管理",
//     path: "/OrganizaManage",
//     icon: "icon-orgManage",
//     localIcon: true,
//     sourcePath: "views/organizamanage",
//     children: [
//         {
//             title: "职务管理",
//             path: "/JobManage",
//             icon: "PartitionOutlined",
//             sourcePath: "views/organizamanage/jobmanage",
//             children: [],
//         },
//         {
//             title: "组织机构",
//             path: "/Organization",
//             icon: "ApartmentOutlined",
//             sourcePath: "views/organizamanage/organization",
//             children: [],
//         },
//         {
//             title: "用户管理",
//             path: "/UserManage",
//             icon: "UserOutlined",
//             sourcePath: "views/organizamanage/usermanage",
//             children: [],
//         },
//         {
//             title: "区域管理",
//             path: "/AreaManage",
//             icon: "FileOutlined",
//             sourcePath: "views/organizamanage/areamanage",
//             children: [],
//         },
//     ],
//     roles: ["admin", "editor", "guest"],
// },
// {
//     title: "授权管理",
//     path: "/authorizeManage",
//     icon: "icon-authorizeManage",
//     localIcon: true,
//     sourcePath: "",
//     children: [
//         {
//             title: "角色授权",
//             path: "/authorizeManage/roleAuthorizeManage",
//             icon: "",
//             sourcePath: "views/authorizemanage/roleauthorize",
//             children: [],
//             roles: ["admin", "editor", "guest"],
//         },
//         // {
//         //   title: "用户授权",
//         //   path: "/authorizeManage/userAuthorizeManage",
//         //   icon: "",
//         //   sourcePath: "views/authorizemanage/userauthorize",
//         //   children:[],
//         //   roles:["admin","editor","guest"]
//         // }
//     ],
//     roles: ["admin", "editor", "guest"],
// },
// {
//     title: "系统配置管理",
//     path: "/systemManage",
//     icon: "icon-systemManage",
//     localIcon: true,
//     sourcePath: "",
//     children: [
//         {
//             title: "字典管理",
//             path: "/systeManage/dictionaryManage",
//             icon: "SettingOutlined",
//             sourcePath: "views/datadictionary/index",
//             children: [],
//             roles: ["admin", "editor", "guest"],
//         },
//     ],
//     roles: ["admin", "editor", "guest"],
// },
// {
//   title: "404",
//   path: "/error/404",
//   icon: "",
//   localIcon: true,
//   sourcePath: "views/error/404",
//   children:[],
//   roles:["admin","editor","guest"]
// }
];
var _default = menuList;
exports["default"] = _default;
//# sourceMappingURL=menuConfig.dev.js.map
