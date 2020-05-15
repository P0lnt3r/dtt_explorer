import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin, Card ,Row , Col , Typography } from 'antd';
import styles from './index.less';
import { connect } from 'dva';
import AddressTransactionList from './AddressTransactionList'

const { Text } = Typography;

const Address = ( props ) => {

  const pathAddress = props.match.params.address;
  const { dispatch , address } = props;
  const { transactionList , balance } = address;

  useEffect( ()=> {
    dispatch({
      type:'address/fetchAddressInfo',
      payload:{
        address:pathAddress
      }
    })
  } , [ pathAddress ] );
  console.log( transactionList );
  return (
    <div className="ant-pro-grid-content wide">
       <Card >
          <Row>
            <Col span={4}>
              <Text >钱包余额</Text>
            </Col>
            <Col offset={1} span={18}>
              <Text>{ balance }</Text>
            </Col>
          </Row><br/>
          <Row>
            <Col span={4}>
              <Text >钱包地址</Text>
            </Col>
            <Col offset={1} span={18}>
              <Text>{ pathAddress }</Text>
            </Col>
          </Row><br/>
       </Card>
       <Card title='交易记录'>
         <AddressTransactionList transactionList={transactionList} />
       </Card>
    </div>
  );
}

export default connect( ( {address} ) => ( {address} ) )( Address );
