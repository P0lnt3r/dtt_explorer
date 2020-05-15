import { Row , Col ,  Typography } from 'antd';

const { Text } = Typography;

export default ( props ) => {
    const { label , value } = props;
    return (
        <Row>
          <Col span={4}>
            <Text >{label}</Text>
          </Col>
          <Col offset={1} span={18}>
            <Text strong>{value}</Text>
          </Col>
        </Row>
    )
}
