import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';


class Main extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Layout>
          <Sider />
          <Content />
        </Layout>
      </Layout>
    );
  }
}

export default Main