import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
// import { bindActionCreators } from 'redux';

import ResultSearch from './ResultSearch.jsx';


const Result = ({ match }) => (
  <Switch>
    <Route path={match.url} component={ResultSearch} />
  </Switch>
);

Result.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};
Result.defaultProps = {
  match: {
    url: '',
  },
};


const mapStateToProps = state => (state.result);
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
