import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import { removeResultAction, clearResultsAction } from '../states/actions/resultActions';


export default connect(
  (state) => ({
    resultList: state.results
  }),
  (dispatch) => ({
    onRemoveResult: (event) => dispatch(removeResultAction(event.target.name)),
    onClearResult: () => dispatch(clearResultsAction()),

  })
)(Sidebar);
