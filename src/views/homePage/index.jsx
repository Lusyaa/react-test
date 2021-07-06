import React, { useState } from 'react';
import { Card, Row, Col, } from 'antd';
import ReactEcharts from 'echarts-for-react';
import "./index.less";

const HomePage = (props) => {
    const [sales, setSales] = useState([5, 20, 36, 10, 10, 20]);
    const [stores, setStores] = useState([15, 120, 36, 110, 110, 20]);
    // 饼图-配置对象
    const getPieOption = (sal, sto) => {
        return {
            title: {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    };
    // 柱状图/折线图-配置对象
    const getOption = (sal, sto, typ) => {
        return {
            title: {
                // text: '这是一个测试图标案例',
            },
            tooltip: {},
            legend: {
                data: ['销量', '库存']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: typ,
                data: sales
            },
            {
                name: '库存',
                type: typ,
                data: stores
            }]
        }
    };
    // 环形图-配置对象
    const getRounedCornerOption = () => {
        return {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 1048, name: '搜索引擎' },
                        { value: 735, name: '直接访问' },
                        { value: 580, name: '邮件营销' },
                        { value: 484, name: '联盟广告' },
                        { value: 300, name: '视频广告' }
                    ]
                }
            ]
        }
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Row gutter={24} style={{ flex: 1 }}>
                <Col span={12}>
                    <Card title="饼状图" className="shadowBox" >
                        <ReactEcharts option={getPieOption(sales, stores)} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="柱状图" className="shadowBox" >
                        <ReactEcharts option={getOption(sales, stores, 'bar')} />
                    </Card>
                </Col>
            </Row>
            <Row gutter={24} style={{ flex: 1, marginTop: 20 }}>
                <Col span={12}>
                    <Card title="折线图" className="shadowBox" >
                        <ReactEcharts option={getOption(sales, stores, 'line')} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="环形图" className="shadowBox" >
                        <ReactEcharts option={getRounedCornerOption(sales, stores)} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage
