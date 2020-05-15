import React, { useEffect, useState } from 'react';
import { Table, Divider, Tag } from 'antd';
import styles from './index.less';
import { connect } from 'dva';
import Link from 'umi/link';
import { ignoreMiddle } from '@/utils/strutils';

const columns = [
  {
    title: '区块高度',
    dataIndex: 'blockHeight',
    key: 'blockHeight',
    render: text => <Link to={`/blocks/${text}`}> {text} </Link> ,
  },
  {
    title: '区块时间',
    dataIndex: 'blockTime',
    key: 'blockTime',
  },
  {
    title: '交易哈希值',
    dataIndex: 'hash',
    key: 'hash',
    render: text => <Link to={`/transactions/${text}`}> { ignoreMiddle(text,8) } </Link> ,
  },
  {
    title: '发送方',
    dataIndex: 'from',
    key: 'from',
    render: text => <Link to={`/addresses/${text}`}> { ignoreMiddle(text,8) } </Link>,
  },
  {
    title: '接收方',
    dataIndex: 'to',
    key: 'to',
    render: text => <Link to={`/addresses/${text}`}> { ignoreMiddle(text,8) } </Link>,
  },
  {
    title: '代币数量',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: '手续费',
    dataIndex: 'fee',
    key: 'fee',
  },
];


const TransactionList = ( props ) => {

  const { dispatch , transactions } = props;
  const { transactionList } = transactions;
  const { current , size , total , records } = transactionList;
  const [ pagination , setPagination ] = useState(
    {
      current:current , 
      size:size , 
      total:total 
    }
  )

  useEffect( () => {
    dispatch( {
      type:'transactions/fetchTransactionList',
      payload:{
        page:pagination.current ,
        size:pagination.size
      }
    } ) ; 
  } , [pagination] );

  const onChange = ( page , size ) => {
    setPagination({
      current:page , 
      size:size
    })
  }

  return (
    <div className={styles.container}>
      <div id="components-table-demo-basic" >
        <Table columns={columns} dataSource={records} pagination={pagination} onChange={onChange} loading={transactions.loading}/>
      </div>
    </div>
  )
}
export default connect( ( { transactions } ) => ( { transactions } ) )( TransactionList )

