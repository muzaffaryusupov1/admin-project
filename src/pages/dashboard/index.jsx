import { Button, Card, Col, Row, Skeleton, Table, Typography } from 'antd'
import React from 'react'
import { useLoad } from '../../hooks/request'
import { bannerList, brandsList, categoriesList, ordersList, productsList, usersList } from '../../constants/urls'

function Dashboard() {
  const { response: products, loading: productsLoading } = useLoad({ url: productsList })
  const { response: categories, loading: categoriesLoading } = useLoad({ url: categoriesList })
  const { response: banner, loading: bannerLoading } = useLoad({ url: bannerList })
  const { response: brands, loading: brandsLoading } = useLoad({ url: brandsList })
  const { response: orders, loading: ordersLoading } = useLoad({ url: ordersList })
  const { response: users, loading: usersLoading } = useLoad({ url: usersList })

  let content = [
    {
      id: 1,
      title: 'Total products',
      loading: productsLoading,
      value: products?.length
    },
    {
      id: 2,
      title: 'Total categories',
      loading: categoriesLoading,
      value: categories?.length
    },
    {
      id: 3,
      title: 'Total banner',
      loading: bannerLoading,
      value: banner?.length
    },
    {
      id: 4,
      title: 'Total brands',
      loading: brandsLoading,
      value: brands?.length
    },
    {
      id: 5,
      title: 'Total orders',
      loading: ordersLoading,
      value: orders?.length
    },
    {
      id: 6,
      title: 'Total prices',
      loading: ordersLoading,
      value: orders?.reduce((a, b) => a + b.product.price, 0)?.toLocaleString() + " UZS"
    },
    {
      id: 7,
      title: 'Total users',
      loading: usersLoading,
      value: users?.length
    },
  ]

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
      title: 'Product price',
      dataIndex: 'product',
      render: (product) => <span>{product.price.toLocaleString()} UZS</span>
    },
  ];

  return (
    <div>
      <Typography.Title>Dashboard</Typography.Title>
      <Row gutter={[12, 12]}>
        {
          content.map(({ id, title, loading, value }) => (
            <Col span={6} key={id}>
              <Card>
                <Typography.Title level={3}>{title}</Typography.Title>
                <Skeleton active paragraph={false} loading={loading} >
                  <Typography.Paragraph style={{ fontSize: 18 }}>{value}</Typography.Paragraph>
                </Skeleton>
              </Card>
            </Col>
          ))
        }
      </Row>
      <Card title="Latest Orders" style={{marginTop: 24}}>
        <Table pagination={false} dataSource={orders?.slice(0,8)} columns={columns} loading={ordersLoading} rowKey='id' />
      </Card>
    </div>
  )
}

export default Dashboard