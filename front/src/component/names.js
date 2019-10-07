import React from 'react';
import {connect} from 'react-redux';
import superagent from 'superagent';

const API_URL = 'http://localhost:8080';

class Name extends React.Component{  
    
  handleDelete = (e) => {
    e.preventDefault();
    superagent.delete(`${API_URL}/names/${e.target.value}`)
      .then(results => {
        this.props.loadStore(results.body);
      })
      .catch(console.log('couldnt delete from store'));
  };

    
  render(){
    return(
      <>
        <li key={this.props.names.id}>
          {this.props.names.name}
          <button onClick={this.handleDelete}> Delete me </button>
        </li>
        <p>from names.js</p>
      </>
    );
  }  
};

const mapStateToProps = (state) => ({
  names: state.names,
});

const mapDispatchToProps = (dispatch) => ({
  loadStore : (names) => {
    dispatch({
      type: 'NAME_LOAD',
      payload: names,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Name);