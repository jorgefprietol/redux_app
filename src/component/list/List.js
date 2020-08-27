import React from 'react';
import './List.css';

import { connect } from 'react-redux';

import axios from 'axios';
import { useEffect } from 'react';
import Item from '../item/Item';
import {store_all, fetchData} from '../../redux/actions/apiActions';
import apiState from '../../redux/reducers/apiReducer';

const List = ({list, loading, error, store_all, fetchData}) => {

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="List">
      <h1>List</h1>
      { loading ? 'Cargando Datos...' : '' }
      { error ? 'Recibido error' + error : '' }
      {
        list && list.length ?
          list.map((item, index) => {
            return <Item data = {item} key= {index}/>
          })
          : ''
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('Estado Recibido', state.apiState);
  return {
    list: state.apiState.list,
    loading: state.apiState.loading,
    error: state.apiState.error,
  }
}

export default connect(
  mapStateToProps,
  { store_all,fetchData }
)(List);
