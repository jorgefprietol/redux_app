import React from 'react';
import './Form.css';

import { connect } from 'react-redux';

const Form = ({}) => {

  return (
    <div className="Form">
      <h1>New</h1>
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
)(Form);
