import { Button, Card, Drawer, Table } from 'antd'
import React, { useState } from 'react'
import { useLoad } from '../../hooks/request'
import { ordersList } from '../../constants/urls'
import { EyeOutlined, } from '@ant-design/icons'

function OrdersPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [viewElement, setViewElement] = useState(null)
    const { response: orders, loading, request: reload } = useLoad({ url: ordersList })
    
    const handleCancel = () => {
        setIsModalOpen(false)
        setViewElement(null)
    }

    const handleView = (item) => {
        setViewElement(item)
        setIsModalOpen(true)
    }



    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'User name',
            dataIndex: 'fullname',
        },
        {
            title: 'User address',
            dataIndex: 'address',
        },
        {
            title: 'Product title',
            dataIndex: 'product',
            render: (product) => <span>{product.title}</span>
        },
        {
            title: 'Actions',
            render: (item) => (
                <Button icon={<EyeOutlined />} onClick={() => handleView(item)} />
            )
        }
    ];


    return (
        <div>
            <Card title='Orders'>
                <Table dataSource={orders} columns={columns} loading={loading} rowKey='id' />

                <Drawer title='Order' onClose={handleCancel} open={isModalOpen && !!viewElement} width={1000}>
                    {JSON.stringify(viewElement)}
                </Drawer>
            </Card>
        </div>
    )
}

export default OrdersPage