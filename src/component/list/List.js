import React from 'react';
import './List.css';

import { connect } from 'react-redux';

import axios from 'axios';
import { useEffect } from 'react';
import Item from '../item/Item';
import {store_all} from '../../redux/actions/apiActions';
import apiState from '../../redux/reducers/apiReducer';

const List = ({list, store_all}) => {

  useEffect(() => {
    axios
        .get(
          'http://dev.contanimacion.com/api_tablon/api/mensajes'
        )
        .then(({data}) => {
          console.log('llega: ', data);
          store_all({
            list: data,
          })
        })
        .catch((error) => {
          console.log('error proyecto: ', error);
        })

  }, [])

  return (
    <div className="List">
      <h1>List</h1>
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
  console.log('Estado Recibido', state);
  return {
    list: state.apiState.list,
  }
}

export default connect(
  mapStateToProps,
  { store_all }
)(List);
