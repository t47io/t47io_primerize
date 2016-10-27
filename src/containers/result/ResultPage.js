import { connect } from 'react-redux';

import ResultPage from '../../components/result/ResultPage';
import { gotoResultAction } from '../../states/actions/resultActions';
import { cleanupJobId } from '../../utilities/regexInputs';

export default connect(
  (state, ownProps) => {
    let jobId = cleanupJobId(ownProps.params.jobId);
    let isRedirect = (jobId !== ownProps.params.jobId);

    let json = state.results.filter((job) => (job.jobId === jobId));
    if (!json.length) {
      return { jobId: "" }
    } else {
      return {
        ...(json[0]),
        isRedirect
      };
    }
  },
  (dispatch) => ({

  }),
  (state, dispatch, ownProps) => {
    if (state.isRedirect) {
      dispatch(gotoResultAction(state.jobId))
    }
    return {
      ...state,
      ...dispatch
    };
  }
)(ResultPage);
