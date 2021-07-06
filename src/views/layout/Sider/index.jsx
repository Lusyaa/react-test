import { React } from 'react';
import { Layout } from 'antd';
import Menu from './Menu';
import "./index.less";

const { Sider } = Layout;
const LayoutSlider = (props) => {
  return (
    <Sider width={200} className="layoutClass" style={{ zIndex: "10", background: '#fff' }}>
      <Menu />
    </Sider>
  )
}

export default LayoutSlider

