import React, { useEffect, useState } from 'react';
import { Table, Divider, Tag } from 'antd';
import styles from './index.less';
import { connect } from 'dva';
import Link from 'umi/link';
import { ignoreMiddle } from '@/utils/strutils';

const columns = [

  {
    title: '区块高度',
    dataIndex: 'height',
    key: 'height',
    render: text => <Link to={`blocks/${text}`}>{text}</Link> ,
  },
  {
    title: '区块哈希值',
    dataIndex: 'hash',
    key: 'hash',
    render: text => ignoreMiddle(text , 10)  ,
  },
  {
    title: '区块时间',
    dataIndex: 'blockTime',
    key: 'blockTime',
  },
  {
    title: '挖矿地址',
    dataIndex: 'miner',
    key: 'miner',
    render: text => <Link to={`addresses/${text}`}>{text}</Link>,
  },
  {
    title: '交易数目',
    dataIndex: 'txCount',
    key: 'txCount',
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


const BlockList = ( props ) => {

  const { dispatch , blocks } = props;
  const { blockList } = blocks;
  const { current , size , total , records } = blockList;
  const [ pagination , setPagination ] = useState(
    {
      current:current , 
      size:size , 
      total:total 
    }
  )

  useEffect( ()=> {
    dispatch( {
      type:'blocks/fetchBlockList' , 
      payload:{
        page:pagination.current,
        size:pagination.size
      }
    } ) ; 
  } , [ pagination ] );

const onChange = ( page , size ) => {
  setPagination({
    current:page , 
    size:size
  })
}

  return (
    <div className={styles.container}>
      <div id="components-table-demo-basic">
        <Table columns={columns} loading={ blocks.loading } dataSource={records} pagination={ { 
          current:current , pageSize:size , total: total,
          onChange:onChange
          }}/>
      </div>
    </div>
  )
}

export default connect( ( { blocks } ) => ({ blocks }) )(BlockList)

