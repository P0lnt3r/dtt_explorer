import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin, Card ,Row , Col } from 'antd';
import styles from './index.less';
import LatestBlockList from './LatestBlockList'
import LatestTransactionList from './LatestTransactionList'
import { connect } from 'dva';


const Index = ( props ) => {

  const { index } = props;
  const { blockList , transactionList } = index;
  
  return (
    <div className="ant-pro-grid-content wide">
      <Card>
        <Card title="最新区块">
          <LatestBlockList blockList={blockList} />
        </Card>
        <br/><br/><br/>
        <Card title="最新交易">
          <LatestTransactionList transactionList={transactionList} />
        </Card>
      </Card>
    </div>
  )
}

export default connect( ( {index} ) => ( {index} ) )( Index );
