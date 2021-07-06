import React from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import menuList from '@/config/menuConfig';// 数据源
import "./index.less";

const { SubMenu } = Menu;

const LayoutMenu = (props) => {
  return (
    <Menu mode="inline" defaultSelectedKeys={["sub1"]}>
      {menuList.map(item => {
        if (item.children && item.children.length < 1) {
          return (< Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.path} />
            {item.title}
          </Menu.Item >)
        } else if (item.children.length >= 1) {
          return (<SubMenu key={item.key} icon={item.icon} title={item.title}>
            {item.children.map(child => {
              return (<Menu.Item key={child.key} >
                <Link to={child.path} />
                {child.title}
              </Menu.Item >)
            })
            }
          </SubMenu>)
        }
      })
      }
    </Menu >
  );
};

// 导出的是 withRouter(Nav) 函数执行
export default withRouter(LayoutMenu)
// export default LayoutMenu;
