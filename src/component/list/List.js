import React from 'react';
import './List.css';

import { connect } from 'react-redux';

const List = ({}) => {

  return (
    <div className="List">
      
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
