import React from 'react';
import { Layout, Menu } from 'antd';
import logo from '../../../assets/images/logo.png';
// import logo from '@/assets/images/logo.png';
import "./index.less";

const { Header } = Layout

const LayoutHeader = () => {
    return (
        <Header className="slidebar-logo-container" style={{ padding: "0 50px 0px 20px" }}>
            <img src={logo} className="slidebar-logo" alt="logo" />
            <h1 className="slidebar-title">后台管理系统</h1>
            <Menu className="right-menu" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">任务树</Menu.Item>
                <Menu.Item key="2">任务管理</Menu.Item>
                <Menu.Item key="3">权限管理</Menu.Item>
            </Menu>
        </Header>
    )
}
export default LayoutHeader
