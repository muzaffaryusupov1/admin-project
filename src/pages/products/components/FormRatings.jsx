import { Col, Form, InputNumber, Row } from "antd"

function FormRatings() {
  return (
    <Row>
      <Col span={24}>
        <Form.Item label="Nechta Sotilgani" name='sold' rules={[{
          type: 'number',
          required: true,
          message: 'Maydon Bo\'sh'
        }]}>
          <InputNumber style={{ width: '100%' }} controls={false} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item label="Nechta sharh yozilgani" name='reviewCount' rules={[{
          type: 'number',
          required: true,
          message: 'Maydon Bo\'sh'
        }]}>
          <InputNumber style={{ width: '100%' }} controls={false} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item label="Baholash" name='rating' rules={[{
          type: 'number',
          required: true,
          message: 'Maydon Bo\'sh'
        }]}>
          <InputNumber style={{ width: '100%' }} controls={false} />
        </Form.Item>
      </Col>
    </Row>
  )
}

export default FormRatings