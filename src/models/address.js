import { getAddress } from '@/services/api'

const AddressModel = {

    namespace: 'address' , 

    state: {
        loading: true , 
        balance: 0,
        transactionList:[]
    },

    effects:{
        *fetchAddressInfo( { payload }, { call, put } ){
            const { address } = payload;
            const response = yield call( getAddress , address );
            yield put( {
                type: 'showAddressInfo' , 
                payload: response.data
            } )
        }
    },

    reducers: {
        showAddressInfo : ( state , { payload } ) => {
            return {
                loading:false , 
                ...payload
            }
        }
    }

}

export default AddressModel;