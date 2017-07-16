import { connect } from 'react-redux';

import ResultPage from '../../components/result/ResultPage';
import { addResultAction, removeResultAction, gotoResultAction } from '../../states/actions/resultActions';
import { showModalAction, hideModalAction } from '../../states/actions/uiActions';
import { cleanupJobId } from '../../utilities/regexInputs';
import { convertJson1D, convertJson2D, convertJson3D } from '../../utilities/formatJson';
import getData from '../../utilities/getData';


const onResultEnter = (nextState, replace) => {
  const jobId = cleanupJobId(nextState.params.jobId);
  const isRedirect = (jobId !== nextState.params.jobId);
  if (jobId.length !== 16) {
    replace('/result/');
  } else if (isRedirect) {
    replace(`/result/${jobId}`);
  }
};


const ResultPageSmart = connect(
  (state, ownProps) => {
    const jobId = cleanupJobId(ownProps.params.jobId);
    const json = state.results.filter(job => (job.jobId === jobId));
    return (!json.length) ? {
      json: {},
      jobId,
    } : {
      json: json[0],
      jobId,
    };
  },
  dispatch => ({
    onFetch: (jobId) => {
      getData(jobId)
      .then((json) => {
        let newJson;
        switch (json.type) {
          case 1:
            newJson = convertJson1D(json);
            break;
          case 2:
            newJson = convertJson2D(json);
            break;
          case 3:
            newJson = convertJson3D(json);
            break;
        }
        Promise.resolve(dispatch(removeResultAction(`result_remove_${newJson.jobId}`)))
        .then(() => dispatch(addResultAction(newJson)))
        .catch((err) => { console.log(err); });
      })
      .catch((err) => { console.log(err); });
    },
  })
)(ResultPage);


export { ResultPageSmart, onResultEnter };
