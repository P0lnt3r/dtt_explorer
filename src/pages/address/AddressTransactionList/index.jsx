import React from 'react';
import { Table, Divider, Tag } from 'antd';
import styles from './index.less';

import Link from 'umi/link';

import { ignoreMiddle } from '@/utils/strutils'



const columns = [
  {
    title: '区块高度',
    dataIndex: 'blockHeight',
    key: 'blockHeight'
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
    render: text => <Link to={`/transactions/${text}`}> { ignoreMiddle(text , 8) } </Link>,
  },
  {
    title: '发送方',
    dataIndex: 'from',
    key: 'from',
    render: text => <Link to={`/addresses/${text}`} > { ignoreMiddle(text , 8) } </Link>,
  },
  {
    title: '接收方',
    dataIndex: 'to',
    key: 'to',
    render: text => <Link to={`/addresses/${text}`} > { ignoreMiddle(text , 8) } </Link>,
  },
  {
    title: '交易数量',
    dataIndex: 'value', 
    key: 'value',
  },
  {
    title: '手续费',  
    dataIndex: 'fee',
    key: 'fee',
  },
];


export default ( props ) => {
  const { transactionList } = props;
  return (
    <div className={styles.container}>
            <div id="components-table-demo-basic">
                <Table columns={columns} dataSource={transactionList}  />
            </div>
    </div>
  )
}



