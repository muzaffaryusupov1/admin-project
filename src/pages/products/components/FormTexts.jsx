import { Col, Form, Input, Row } from "antd"

function FormTexts() {
    return (
        <Row>
            <Col span={24}>
                <Form.Item label="Nomi" name='title' rules={[{
                    type: 'string',
                    required: true,
                    message: 'Maydon Bo\'sh'
                }]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item style={{ display: 'none' }} label="Slug" name='slug' rules={[{
                    type: 'string',
                    required: true,
                    message: 'Maydon Bo\'sh'
                }]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item label="Modeli" name='model' rules={[{
                    type: 'string',
                    required: true,
                    message: 'Maydon Bo\'sh'
                }]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item label="Mahsulot ta'rifi" name='desc' rules={[{
                    type: 'string',
                    required: true,
                    message: 'Maydon Bo\'sh',
                    min: 120
                }]}>
                    <Input.TextArea rows={4} />
                </Form.Item>
            </Col>
        </Row>
    )
}

export default FormTexts