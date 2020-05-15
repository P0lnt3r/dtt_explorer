import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { Spin, Card, Row, Col , Typography, Button } from 'antd';
import TransactionItem from './../TransactionItem'
import { Link } from 'umi';


const { Text } = Typography;

const TransactionDetail = ( props ) => {
  
  const { dispatch , transactions } = props;
  let hash  = props.match.params.hash;

  useEffect( ()=>{
    dispatch( {
      type: 'transactions/fetchTransaction' , 
      payload: {
        hash: hash
      }
    })
  } , [] )

  const {
    blockHeight,
    blockTime,
    fee,
    from,
    gas,
    gasPrice,
    to,
    value,
  } = transactions.transaction ; 

  return (
    <div className="ant-pro-grid-content wide">
        <Card>
          <TransactionItem label='交易哈希值' value={ hash } /><br/>
          <TransactionItem label='区块高度' value={ <Link to={ `/blocks/${blockHeight}` }> {blockHeight} </Link> } /><br/>
          <TransactionItem label='区块时间' value={blockTime} /><br/>
          <TransactionItem label='Gas' value={gas} /><br/>
          <TransactionItem label='Gas Price' value={gasPrice} /><br/>
          <TransactionItem label='发送方' value={  <Link to={ `/addresses/${from}` }> {from} </Link>} /><br/>
          <TransactionItem label='接受方' value={  <Link to={ `/addresses/${to}` }> {to} </Link>}  /><br/>
          <TransactionItem label='代币数量' value={value} /><br/>
          <TransactionItem label='手续费' value={fee} /><br/>
        </Card>
    </div>
  );


}

export default connect( ( {transactions} ) => ( { transactions }  ) )( TransactionDetail )




