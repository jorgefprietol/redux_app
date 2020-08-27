import React from 'react';
import './Form.css';

import { connect } from 'react-redux';

import {reduxForm, Field} from 'redux-form';

const validate = values => {
  const errors = {};
  return errors;
}

const renderField = ({label,input, type}) => (
  <div>
    <label className='control-label'>{label}</label>
    <div>
      <input {...input} type={type} className='form-control' placeholder={label} />

    </div>
  </div>
)

let Form = ({}) => {

  return (
    <div className="Form">
      <h3>Añadir nuevo mensaje</h3>
      <form>
        <div>
          <Field name='asunto' label='asunto' component={renderField} />
        </div>
        <div>
          <Field name='mensaje' label='mensaje' component={renderField} />
        </div>
        <div>
          <input type='submit' value='Enviar' className='enviar' />
        </div>
      </form>
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
