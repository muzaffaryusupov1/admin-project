import { useEffect, useState } from 'react';
import { Button, Card, Drawer, Form, Image, Space, Switch, Table, Tabs } from 'antd';
import { EditOutlined, DeleteOutlined, } from '@ant-design/icons'
import { useLoad, usePatchRequest, usePostRequest } from '../../hooks/request';
import { productsDelete, productsList, productsPatch, productsPost } from '../../constants/urls';
import { slugify } from '../../utils/helpers';
import useDeleteModal from '../../hooks/useDeleteModal';
import { FormTexts, FormRatings, FormPrices, FormImages, FormCharacteristic } from './components';


function Products() {
  const [form] = Form.useForm();
  const title = Form.useWatch('title', form);
  const postRequest = usePostRequest({ url: productsPost })
  const patchRequest = usePatchRequest()
  const [isUpdate, setIsUpdate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const deleteModal = useDeleteModal()

  const { response: products, loading, request: reload } = useLoad({ url: productsList })


  const columns = [
    {
      title: 'Rasmi',
      dataIndex: 'mainImage',
      render: (image) => <Image src={image} width={150} height={70} style={{ objectFit: 'contain' }} />
    },
    {
      title: 'Nomi',
      dataIndex: 'model',
    },
    {
      title: 'Narxi',
      dataIndex: 'price',
      render: (price) => <span>{price.toLocaleString()} sum</span>
    },
    {
      title: 'Sotuvda borligi',
      dataIndex: 'stock',
      render: (st) => <p>{st ? 'Bor' : 'Qolmagan'}</p>
    },
    {
      title: 'Rekomendatsiyaga chiqarish',
      render: (item) => (
        <Switch checkedChildren="Olib tashlash" unCheckedChildren="Chiqarish" defaultChecked={!!item.isRecommended} onChange={(e) => handleRecommended(e, item.id)} />
      )
    },
    {
      title: 'Qo\'shimcha',
      render: (item) => (
        <Space>
          <Button icon={<EditOutlined />} title="O'zgartirish" onClick={() => handleEdit(item)} />
          <Button icon={<DeleteOutlined />} danger title="O'chirish" onClick={() => deleteModal(productsDelete(item.id), reload)} />
        </Space>
      )
    }
  ];

  const handleRecommended = async (e, id) => {
    const { success } = await patchRequest.request({ url: productsPatch(id), data: { isRecommended: e } })
    if (success) {
      reload()

    }
  }

  const handleEdit = (item) => {
    form.setFieldsValue(item)
    setIsUpdate(item.id)
    setIsModalOpen(true)
  }

  const handleFinish = async (data) => {
    console.log(data)
    const { success } = isUpdate ? await patchRequest.request({ url: productsPatch(isUpdate), data }) : await postRequest.request({ data })
    if (success) {
      reload()
      handleCancel()
    }
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setIsUpdate(null)
    form.resetFields()
  }

  const handleAdd = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = () => {
    form.submit()
  }


  const items = [
    {
      key: '1',
      label: 'Yozuv uchun',
      children: <FormTexts />,
    },
    {
      key: '2',
      label: 'Baholash uchun',
      children: <FormRatings />,
    },
    {
      key: '3',
      label: 'Narx va Chegirma',
      children: <FormPrices />,
    },
    {
      key: '4',
      label: 'Brand va rasmlar',
      children: <FormImages form={form} />,
    },
    {
      key: '5',
      label: 'Xususiyatlar',
      children: <FormCharacteristic form={form} />,
    },
  ];


  useEffect(() => {
    if (title && title.length) {
      form.setFieldValue('slug', slugify(title));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title])

  return (
    <div>
      <Card title='Mahsulotlar' extra={<Button onClick={handleAdd}>+ Qo'shish</Button>}>
        <Table dataSource={products} columns={columns} loading={loading} rowKey='id' />

        <Drawer title={`Mahsulot${isUpdate ? 'ni O\'zgartirish' : ' Qo\'shish'}`} onClose={handleCancel} open={isModalOpen} width={1000} extra={<Button onClick={handleSubmit}>{isUpdate ? 'O\'zgartirish' : 'Qo\'shish'}</Button>}>
          <Form layout='vertical' form={form} onFinish={handleFinish}>
            <Tabs defaultActiveKey='1' items={items} type='card' />
          </Form>
        </Drawer>
      </Card>
    </div>
  )
}

export default Products