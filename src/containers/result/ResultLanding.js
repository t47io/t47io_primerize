import { connect } from 'react-redux';

import ResultLanding from '../../components/result/ResultLanding';
import {
  removeResultAction, clearResultsAction,
  gotoResultAction,
  blurSearchAction, submitSearchAction
} from '../../states/actions/resultActions';
import { cleanupJobId } from '../../utilities/regexInputs';


export default connect(
  (state) => ({ resultList: state.results }),
  (dispatch) => ({
    onRemoveResult: (event) => dispatch(removeResultAction(event.target.name)),
    onClearResult: () => dispatch(clearResultsAction()),

    onBlur: (event) => {
      dispatch(blurSearchAction());
      event.target.value = cleanupJobId(event.target.value);
    },
    onSubmit: (event) => {
      event.preventDefault();
      dispatch(submitSearchAction(event.target.text.value));
      dispatch(gotoResultAction(event.target.text.value))
    }
  })
)(ResultLanding);
