import React from 'react';
import { Table, Divider, Tag } from 'antd';
import styles from './index.less';
import Link from 'umi/link';

const columns = [
  {
    title: '交易哈希',
    dataIndex: 'hash',
    key: 'hash',
    render: text =>  <Link to={`transactions/${text}`}><a>{text}</a></Link>,
  },
  {
    title: '区块高度',
    dataIndex: 'blockHeight',
    key: 'blockHeight',
    render: text => <Link to={`blocks/${text}`}><a>{text}</a></Link>,
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


const footer = () => ( 
  <Link to='/transactions'>
    <a className={styles.footer}>
      查看更多...
    </a> 
  </Link>
  
)

export default ( props ) => {

  const {transactionList} = props;

  return (
    <div className={styles.container}>
      <div id="components-table-demo-basic">
        <Table columns={columns} dataSource={transactionList} pagination={false} footer={footer} />
      </div>
    </div>
  )

} 

