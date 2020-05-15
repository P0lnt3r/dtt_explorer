import { getBlock , getBlockList} from '@/services/api'

const BlocksModel = {

    namespace: 'blocks' , 
    state: {

        loading: true , 

        block:{
            
        },

        blockList:{
            current: 1 , 
            size:10 , 
            total:10 , 
            records:[]
        }

    },
    effects:{
        *fetchBlock( {payload} ,{ call , put } ){
            const { height } = payload;
            const response = yield call( getBlock , height )
            yield put ({
                type: 'showBlock' ,
                payload: response.data
            })
        } , 
        *fetchBlockList( { payload } , { call , put } ){
            const { page , size } = payload;
            const response = yield call( getBlockList , page , size )
            yield put ( {
                type: 'showBlockList' , 
                payload: response.data
            } )
        }
    },
    reducers: {
        showBlock: ( state , { payload } ) => {
            return {
                ...state,
                loading: false,
                ...payload
            }
        },
        showBlockList: ( state , { payload } ) => {
            return {
                ...state,
                loading: false ,
                blockList: { ...payload } , 
            }
        }
    }
}

export default BlocksModel;