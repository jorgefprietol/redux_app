import React from 'react';
import './Botonera.css';

import navReducer from '../../redux/reducers/navReducer';
import {nav_click} from '../../redux/actions/navActions';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';



const Botonera = ({title, nav_click}) => {

  const buttonClick = (title) => {
    nav_click({
      title: title,
    });
  }

  return (
    <div className="Botonera">
      <header className="App-header">
        <div>
            <h1>
                {title}
            </h1>
        </div>
        <ul>
            <li onClick={() =>buttonClick('Home')}><Link to='home'>Home</Link></li>
            <li onClick={() =>buttonClick('List')}><Link to='list'>List</Link></li>
            <li onClick={() =>buttonClick('New')}><Link to='form'>New</Link></li>
        </ul>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('Estado Recibido', state);
  return {
    title: state.navState.title,
  }
}

export default connect(
  mapStateToProps,
  { nav_click }
)(Botonera);
