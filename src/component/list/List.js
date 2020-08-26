import React from 'react';
import './List.css';

import { connect } from 'react-redux';

import axios from 'axios';
import { useEffect } from 'react';

const List = ({}) => {

  useEffect(() => {
    axios
        .get(
          'http://dev.contanimacion.com/api_tablon/api/mensajes'
        )
        .then(({data}) => {
          console.log('llega: ', data);
        })
        .catch((error) => {
          console.log('error proyecto: ', error);
        })

  }, [])

  return (
    <div className="List">
      <h1>List</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('Estado Recibido', state);
  return {
    
  }
}

export default connect(
  mapStateToProps,
  { }
)(List);
