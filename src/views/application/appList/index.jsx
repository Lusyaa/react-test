import React from 'react';
import { Table, Space, Tag, Button } from 'antd';
import "./index.less";

const HomePage = (props) => {
    const data = [
        {
            key: '1',
            name: '任务1',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
            btn: ['查看', '更新任务']
        },
        {
            key: '2',
            name: '任务2',
            age: 42,
            address: '',
            tags: ['loser'],
            btn: ['查看', '提交审核']
        },
        {
            key: '3',
            name: '宋任务3',
            age: 32,
            address: '自建子任务',
            tags: ['cool', 'teacher'],
            btn: ['查看']
        }, {
            key: '4',
            name: '任务4',
            age: 42,
            address: '本区域自建任务',
            tags: ['loser'],
            btn: ['查看', '提交审核']
        },
        {
            key: '5',
            name: '任务5',
            age: 42,
            address: '上级子任务',
            tags: ['loser'],
            btn: ['查看', '提交审核']
        },
    ];


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'btn',
            dataIndex: 'btn',
            render: btn => (
                <>
                    <Space size="middle" >
                        {btn.map(item => {
                            return (
                                <span key={item}>
                                    <Button className="btnColor">{item}</Button>
                                </span>
                            )
                        })
                        }
                    </Space>
                </>
            ),
        },
    ];
    return (
        <>
            <Table rowSelection={{ type: 'checkbox' }} dataSource={data} columns={columns} />;
        </>
    )
}
export default HomePage