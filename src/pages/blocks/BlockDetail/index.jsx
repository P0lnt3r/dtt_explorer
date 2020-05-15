import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.less';

import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import { Spin, Card, Row, Col , Typography, Button } from 'antd';
import BlockBaseInfo from './BlockBaseInfo';
import BlockTransactionList from './BlockTransactionList';

const { Text } = Typography;

const Component = ( props ) => {
  
  const { dispatch , blocks } = props;
  const { block , transactionList } = blocks;
  let pathHeight  = props.match.params.height;
  const [ height , setHeight ] = useState( pathHeight );
  useEffect( ()=>{
    dispatch( {
      type: 'blocks/fetchBlock' , 
      payload: {
        height: height
      }
    })
  } , [height] )

  const {
    blockTime , 
    gasLimit , 
    gasUsed , 
    hash,
    nonce,
    parentHash,
    sha3Uncle,
    size,
    totalDifficulty,
    txCount
  } = block;

  const getNextBlock = () => {
    setHeight( parseFloat(height) + 1 );
  }

  const getPreviousBlock = () => {
    setHeight( parseFloat(height) - 1 );
  }

  return (
    <div className="ant-pro-grid-content wide">
        <Card loading = {blocks.loading} >
          <Row>
            <Col span={4}>
              <Text >区块高度</Text>
            </Col>
            <Col offset={1} span={18}>
              <Button size='small' shape="circle" icon={<LeftOutlined />} onClick={getPreviousBlock} />
                <Text strong style={{ marginLeft:'10px' , marginRight:'10px' }}>{height}</Text>
              <Button size='small' shape="circle" icon={<RightOutlined />} onClick={getNextBlock}/>
            </Col>
          </Row><br/>
          <BlockBaseInfo label='入块时间' value={ blockTime } /><br/>
          <BlockBaseInfo label='区块哈希值' value={hash} /><br/>
          <BlockBaseInfo label='大小' value={ size + ' Bytes' } /><br/>
          <BlockBaseInfo label='交易费' value='0.2 DTT' /><br/>
          <BlockBaseInfo label='交易数量' value={ txCount || 0 } /><br/>
          <BlockBaseInfo label='Gas 使用量' value={ gasUsed } /><br/>
          <BlockBaseInfo label='Gas 限额' value={ gasLimit } /><br/>
          <BlockBaseInfo label='挖矿难度' value='' /><br/>
          <BlockBaseInfo label='总难度' value={ totalDifficulty } /><br/>
          <BlockBaseInfo label='区块奖励' value='2 DTT' /><br/>
          <BlockBaseInfo label='确认数' value='132' /><br/>
          <BlockBaseInfo label='上一个区块' value={ parentHash } /><br/>
          <BlockBaseInfo label='下一个区块' value='0x04f912d649b21df824f425f4962e93e43012e301bddcb532fb2fc316b7398b03' /><br/>
          <BlockBaseInfo label='Sha3Uncles' value={ sha3Uncle } /><br/>
          <BlockBaseInfo label='Nonce' value= { nonce }  /><br/>
        </Card>

        <Card title="交易列表">
          <BlockTransactionList transactionList={ transactionList } />
        </Card>

    </div>
  );


}



export default connect( ({ blocks }) => ({ blocks }) )(Component)




