
/**
 *  忽略一个字符串的中间部分.
 *  主要用于对于 哈希值，钱包地址的显示.

    @param source 文本内容
    @param keep   文本前后保留多少个字符
 */

export function ignoreMiddle( source , keep ){
    let newText = '';
    if ( source.length > keep * 2 ){
        newText = source.substr( 0 , keep ) + '........' + source.substr( source.length - keep - 1 , keep );
    } else {
        // 如果文本长度太短不适合截取,则保留原文本进行返回
        newText = source;
    }
    return newText;

}

