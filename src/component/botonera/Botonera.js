import React from 'react';
import './Botonera.css';

import navReducer from '../../redux/reducers/navReducer';
import {nav_click} from '../../redux/actions/navActions';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import Home from '../home/Home';
import Form from '../form/Form';
import List from '../list/List';



const Botonera = ({title, nav_click, match: {params}}) => {

  const buttonClick = (title) => {
    nav_click({
      title: title,
    });
  }

  const renderSection = () => {
    switch (params.section) {
      case 'home': 
        return <Home/>;
        break;
      case 'list': 
        return <List/>;
        break;
      case 'form': 
        return <Form/>;
        break;
      default:
        return;
    }
  }

  return (
    <div className="Botonera">
      <header className="App-header">
        <div>
            <h1>
                {title}
            </h1>
        </div>
        <Link to='home' onClick={() =>buttonClick('Home')}>Home</Link>
        <Link to='list' onClick={() =>buttonClick('List')}>List</Link>
        <Link to='form' onClick={() =>buttonClick('New')}>New</Link>
      </header>

      { renderSection()}

    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log('Estado Recibido', state);
  return {
    title: state.navState.title,
    section: ownProps.section,
  }
}

export default connect(
  mapStateToProps,
  { nav_click }
)(Botonera);
