import { Col, Form, InputNumber, Row, Switch } from "antd"

function FormPrices() {
    return (
        <Row>
            <Col span={24}>
                <Form.Item label="Narxi" name='price' rules={[{
                    type: 'number',
                    required: true,
                    message: 'Maydon Bo\'sh'
                }]}>
                    <InputNumber style={{ width: '100%' }} controls={false} />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item label="Eski Narxi" name='oldPrice' rules={[{
                    type: 'number',
                    required: true,
                    message: 'Maydon Bo\'sh'
                }]}>
                    <InputNumber style={{ width: '100%' }} controls={false} />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item label="Chegirmasi" name='discount' rules={[{
                    type: 'number',
                    required: true,
                    message: 'Maydon Bo\'sh'
                }]}>
                    <InputNumber style={{ width: '100%' }} controls={false} />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item label="Chegirmagada borligi" name='isOffer' rules={[{
                    type: 'boolean',
                    required: true,
                    message: 'Maydon Bo\'sh'
                }]}>
                    <Switch checkedChildren="Bor" unCheckedChildren="Yoq" />
                </Form.Item>
            </Col>
        </Row>
    )
}

export default FormPrices