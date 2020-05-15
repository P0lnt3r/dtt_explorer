const IndexModel = {
    namespace: 'index' , 
    state: {
        blockList: undefined ,
        transactionList: undefined
    },
    effects:{
        
    },
    reducers: {
        update:( state , { payload } )=>{
            const { blockList , transactionList } = payload;
            if ( blockList ){
                return {
                    ...state , 
                    blockList: blockList
                };
            }
            if ( transactionList ){
                return {
                    ...state , 
                    transactionList: transactionList
                };
            }
            
        }
    },
    subscriptions: {
        buildwebsocket ( { dispatch , history } ){
            // const client = new WebSocket( 'ws://116.62.7.39:8055/websocketservice' );
            const client = new WebSocket( 'ws://127.0.0.1:8055/websocketservice' );
            // const client = new WebSocket( 'ws://47.97.159.245:8055/websocketservice' );
            client.onopen = () => {
                console.log( 'Build Websocket Connect SUCCESS!' );
            }
            client.onmessage = ( message ) => {
                let data = JSON.parse( message.data );
                dispatch( {
                    type:'update' , 
                    payload: data
                } )
            }
        }
    }
}
export default IndexModel;