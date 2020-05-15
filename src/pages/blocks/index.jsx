import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin , Card } from 'antd';
import styles from './index.less';
import BlockList from './BlockList'

export default () => {
  

  return (

    <div className="ant-pro-grid-content wide">
      <Card>
        <BlockList />
      </Card>
    </div>

  );
};
