import { getTransactionList , getTransaction } from '@/services/api'

const TransactionModel = {

    namespace: 'transactions' , 
    state: {
        loading: true , 
        
        transaction: {

        },
        transactionList: {
            page:1,
            size:10,
            record:[],
            current:1
        }
    },
    effects:{

        *fetchTransactionList( { payload } , { call , put } ){
            const { page , size } = payload;
            const response = yield call( getTransactionList , page , size );
            yield put ({
                type: 'transactions/showTransactionList' , 
                payload: response.data
            })
        },

        *fetchTransaction( { payload } , { call , put } ){
            const { hash } = payload;
            const response = yield call( getTransaction , hash );
            yield put ({
                type: 'transactions/showTransaction' , 
                payload: response.data
            })
        }

    },
    reducers: {

        showTransaction: ( state , { payload } ) => {
            return {
                ...state , 
                loading: false,
                transaction: { ...payload }
            }
        },

        showTransactionList: ( state , { payload } ) => {
            return {
                ...state , 
                loading: false ,
                transactionList: { ...payload }
            }
        },
    }

}

export default TransactionModel;