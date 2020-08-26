import React from 'react';
import './Home.css';

import { connect } from 'react-redux';

const Home = ({}) => {

  return (
    <div className="Home">
      <h1>Home</h1>
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
)(Home);
