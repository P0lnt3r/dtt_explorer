import React from 'react';
import { Table, Divider, Tag } from 'antd';
import styles from './index.less';
import Link from 'umi/link';

const columns = [
  {
    title: '区块高度',
    dataIndex: 'height',
    key: 'height',
    render: text => <Link to={`blocks/${text}`}><a>{text}</a></Link>,
  },
  {
    title: '区块时间',
    dataIndex: 'blockTime',
    key: 'blockTime',
  },
  {
    title: '矿工地址',
    dataIndex: 'miner',
    key: 'miner',
    render: text => <Link to={`addresses/${text}`}><a>{text}</a></Link>,
  },
  {
    title: '区块大小',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: '区块奖励',
    dataIndex: 'reword',
    key: 'reword',
  }
];

const footer = () => (
  <Link to='/blocks'>
     <a className={styles.footer}>
      查看更多...
     </a> 
  </Link>
 
)


const LatestBlockList = ( props ) => {
  const { blockList } = props;
  return (
    <div className={styles.container}>
      <div id="components-table-demo-basic">
        <Table columns={columns} dataSource={blockList} pagination={false} footer={footer} />
      </div>
    </div>
  )
}

export default LatestBlockList
