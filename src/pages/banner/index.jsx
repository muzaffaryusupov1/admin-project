import { useState } from 'react';
import { Button, Card, Form, Input, Modal, Row } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useLoad, usePatchRequest, usePostRequest } from '../../hooks/request';
import { bannerDelete, bannerList, bannerPatch, bannerPost, brandsPatch, } from '../../constants/urls';
import { isUrlValid } from '../../utils/helpers';
import useDeleteModal from '../../hooks/useDeleteModal';

const { Meta } = Card;
function Banner() {
    const [form] = Form.useForm();
    const postRequest = usePostRequest({ url: bannerPost })
    const patchRequest = usePatchRequest()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isUpdate, setIsUpdate] = useState(null);
    const deleteModal = useDeleteModal()
    const { response: banners, bannersloading, request: reload } = useLoad({ url: bannerList })

    const handleAdd = () => {
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
        setIsUpdate(null)
        form.resetFields()
    }

    const handleSubmit = () => {
        form.submit()
    }

    const handleFinish = async (data) => {
        const { success } = isUpdate ? await patchRequest.request({ url: bannerPatch(isUpdate), data }) : await postRequest.request({ data })
        if (success) {
            reload()
            handleCancel()
        }
    }

    const handleDelete = (id) => {
        deleteModal(bannerDelete(id), reload)
    }

    const handleEdit = (item) => {
        setIsUpdate(item.id)
        form.setFieldsValue(item)
        setIsModalOpen(true)
    }


    return (
        <div>
            <Card extra={<Button onClick={handleAdd}>+ Banner qo'shish</Button>} bannersloading={bannersloading}>
                <Row gutter={[6, 46]}>
                    {
                        banners?.map(({ id, image, title }) => (
                            <Card
                                hoverable
                                style={{ display: 'flex', flexDirection: 'column', width: 400, height: 300 }}
                                cover={<img alt="example" height={200} style={{ objectFit: 'contain' }} src={image} />}
                                key={id}>
                                <Meta title={title} />
                                <Button key="setting" danger onClick={() => handleDelete(id)} style={{ marginTop: 20, marginRight: 20 }}>
                                    <DeleteOutlined />
                                </Button>
                                <Button key="edit" onClick={() => handleEdit({ id, image, title })}>
                                    <EditOutlined />
                                </Button>
                            </Card>
                        ))
                    }
                </Row>
            </Card>

            <Modal
                maskClosable={false}
                title={isUpdate ? "Bannerni yangilash" : "Banner qo'shish"}
                open={isModalOpen}
                onCancel={handleCancel}
                okText={isUpdate ? 'Yangilash' : 'Qo\'shish'}
                onOk={handleSubmit}
            >
                <Form form={form} onFinish={handleFinish}>
                    <Form.Item label="Nomi" name='title' rules={[{
                        type: 'string',
                        required: true,
                        message: 'Maydon Bo\'sh'
                    }]}>
                        <Input placeholder='Apple' />
                    </Form.Item>
                    <Form.Item label="Rasm Urli" name='image' rules={[{
                        type: 'string',
                        required: true,
                        validator: (_, value) => {
                            if (isUrlValid(value)) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('URL emas!'))
                        },
                    }]}>
                        <Input type='url' />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default Banner