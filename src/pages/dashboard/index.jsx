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
      title: 'Mahsulotlar',
      loading: productsLoading,
      value: products?.length + ' ta'
    },
    {
      id: 2,
      title: 'Kategoriyalar',
      loading: categoriesLoading,
      value: categories?.length + ' ta'
    },
    {
      id: 3,
      title: 'Bannerlar',
      loading: bannerLoading,
      value: banner?.length + ' ta'
    },
    {
      id: 4,
      title: 'Brandlar',
      loading: brandsLoading,
      value: brands?.length + ' ta'
    },
    {
      id: 5,
      title: 'Jami Haridlar',
      loading: ordersLoading,
      value: orders?.length + ' ta'
    },
    {
      id: 6,
      title: 'Umumiy narxlar',
      loading: ordersLoading,
      value: orders?.reduce((a, b) => a + b.product.price, 0)?.toLocaleString() + " UZS"
    },
    {
      id: 7,
      title: 'Buyurtmalar',
      loading: usersLoading,
      value: users?.length + ' ta'
    },
  ]

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Ismi',
      dataIndex: 'fullname',
    },
    {
      title: 'Manzili',
      dataIndex: 'address',
    },
    {
      title: 'Mahsulot Nomi',
      dataIndex: 'product',
      render: (product) => <span>{product.title}</span>
    },
    {
      title: 'Mahsulot narxi',
      dataIndex: 'product',
      render: (product) => <span>{product.price.toLocaleString()} UZS</span>
    },
  ];

  return (
    <div>
      <Typography.Title>Boshqaruv paneli</Typography.Title>
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
      <Card title="Ohirgi buyurtmalar" style={{marginTop: 24}}>
        <Table pagination={false} dataSource={orders?.slice(0,8)} columns={columns} loading={ordersLoading} rowKey='id' />
      </Card>
    </div>
  )
}

export default Dashboard