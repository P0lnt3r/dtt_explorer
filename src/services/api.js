import request from '@/utils/request';

// const API_BASE = 'http://116.62.7.39:8055/api/v1';  / TEST
// http://47.97.159.245:8055/api/v1/blocks/2           / PROD
// const API_BASE = 'http://47.97.159.245:8055/api/v1';

const API_BASE = 'http://localhost:8055/api/v1';
/**
 * 获取钱包地址获取余额及交易信息
 * @param {钱包地址} address 
 */
export async function getAddress( address ) {
  return request( `${API_BASE}/addresses/${address}`);
}

/**
 * 根据高度获取区块信息
 * @param {区块高度} height 
 */
export async function getBlock( height ) {
  return request( `${API_BASE}/blocks/${height}` );
}

/**
 * 获取 分页 的 区块列表信息
 * @param {*} page 
 * @param {*} size 
 */
export async function getBlockList( page , size ) {
  return request( `${API_BASE}/blocks?page=${page}&size=${size}` );
}


/**
 * 获取交易详情
 * @param {*} hash 
 */
export async function getTransaction( hash ) {
  console.log( 'HASH ->' + hash );
  return request( `${API_BASE}/transactions/${hash}` );
}

/**
 * 获取交易列表
 * @param {*} page 
 * @param {*} size 
 */
export async function getTransactionList( page , size ) {
  return request( `${API_BASE}/transactions?page=${page}&size=${size}` );
}