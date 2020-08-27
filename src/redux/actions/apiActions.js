import * as types from './actionTypes';

export const store_all = data => ({
    type: types.STORE_ALL,
    payload: {
        list: data.list,
        loading: data.loading,
    }
})

export const sending_request = () => ({
    type: types.SENDING_REQUEST,
    payload: {
        loading: true,
    }
})

export const request_data = data => ({
    type: types.REQUEST_DATA,
    payload: {
        list: data.list,
        loading: false,
    }
})

export const request_error = error => ({
    type: types.REQUEST_ERROR,
    payload: {
        error: error,
        loading: false,
    }
})