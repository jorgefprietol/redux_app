import React from 'react';
import './Form.css';

import { connect } from 'react-redux';

import {reduxForm} from 'redux-form';

const validate = values => {
  const errors = {};
  return errors;
}

let Form = ({}) => {

  return (
    <div className="Form">
      <h1>New</h1>
    </div>
  );
}

Form = reduxForm(
  {
    form: 'nuevo',
    validate
  }
)(Form)

const mapStateToProps = (state) => {
  console.log('Estado Recibido', state);
  return {
    
  }
}

export default connect(
  mapStateToProps,
  { }
)(Form);
