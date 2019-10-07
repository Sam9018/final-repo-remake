import React from 'react';
import {connect} from 'react-redux';
import superagent from 'superagent';
import Name from './component/names';


const API_URL = 'http://localhost:8080';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    superagent.get(`${API_URL}/names`)
      .then(results => {
      this.props.loadStore(results.body);
      console.log(results.body);
    });
  }

  render() {
    return(
      <>
      <ul>
        <Name />
      </ul>
      <p>hello</p>
      </>);
  }
}

const mapStateToProps = (state) => ({
  names: state.names,
});

const mapDispatchToProps = (dispatch) => ({
  loadStore : (name) => {
    dispatch({
      type: 'NAME_LOAD',
      payload: name,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
