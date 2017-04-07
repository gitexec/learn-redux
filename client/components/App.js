import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators  from '../actions/actionCreators';

import Main from './Main';

function mapStateToProps(state){
  return {
    posts: state.posts,
    commments: state.commments
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

//state are posts and commments
//Dispatch are our actions creators 
const App = connect(mapStateToProps, mapDispatchToProps)(Main);


export default App;
