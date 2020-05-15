import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin , Card } from 'antd';
import styles from './index.less';
import TransactionList from './TransactionList'

export default () => {
  return (
    <div className="ant-pro-grid-content wide">
      <Card>
        <TransactionList />
      </Card>
    </div>
  );
};
