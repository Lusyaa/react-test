import React, { lazy, Suspense } from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import menuList from '@/config/menuConfig';// 数据源
import "./index";

const { Content } = Layout
let routerLists = []

const getmenu = () => {
    menuList.map(item => {
        if (item.children && item.children.length < 1) {
            routerLists.push(item);
        } else if (item.children.length >= 1) {
            item.children.map(child => {
                routerLists.push(child);
            })
        } else {
            console.error(item, 'ERROR');
        }
    })
}

const LayoutContent = (props) => {
    getmenu(); // routerLists 赋值
    return (
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Suspense fallback={<div style={{ textAlign: 'center', fontSize: '20px', padding: '100px 0', color: '#0d7bff' }}>Loading...</div>}>
                <Switch>
                    <Route path='/' exact component={lazy(() => import('@/views/homePage'))} />
                    {routerLists.map(item =>
                        <Route path={item.path} key={item.key} component={
                            item.component ? item.component : lazy(() => import(`@/${item.sourcePath}`))} />
                    )}
                </Switch>
            </Suspense>
        </Content>
    )
}
export default LayoutContent