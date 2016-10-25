import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import { clearResultsACtion } from '../states/actions/resultActions';


export default connect(
  (state) => ({
    resultList: state.results
  }),
  (dispatch) => ({
    onClearResult: () => dispatch(clearResultsACtion()),

  })
)(Sidebar);
