import * as types from './actionTypes';

export const store_all = data => ({
    type: types.STORE_ALL,
    payload: {
        list: data.list,
        loading: data.loading,
    }
})