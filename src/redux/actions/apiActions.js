import * as types from './actionTypes';
import axios from 'axios';

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

const getData = () => {
    return axios
    .get(
      'http://dev.contanimacion.com/api_tablon/api/mensajes'
    )
    .then( res => res)
    .catch(error => error)
}

export const fetchData = () => dispatch => {
    dispatch(sending_request());
    return getData()
            .then(data => {
                dispatch(request_data(data));
            })
            .catch(error => {
                dispatch(request_error(error));
            })
}