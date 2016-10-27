import 'whatwg-fetch';
import { connect } from 'react-redux';

import Design1D from '../../components/design/Design1D';
import {
  changeTagAction, changeSequenceAction,
  changeTmAction, changePrimerLenAction, changeNumPrimerAction, changeCheckT7Action,
  blur1DAction, clear1DAction,
  submit1DinitAction, submit1DsuccessAction, submit1DfailAction
} from '../../states/actions/design1DActions';
import { addResultAction, gotoResultAction } from '../../states/actions/resultActions';
import { showModalAction, hideModalAction } from '../../states/actions/uiActions';

import { convertJson1D } from '../../utilities/formatJson';
import store from '../../states/store';


const prepare1Ddata = (state) => {
  let { tag, sequence } = state;
  let { tm, minLen, maxLen, numPrimer, isNumPrimer, isCheckT7 } = state.options;

  let postData1D = new URLSearchParams();
  postData1D.append('type', 1);

  postData1D.append('tag', tag);
  postData1D.append('sequence', sequence);
  postData1D.append('min_Tm', tm);
  postData1D.append('max_len', maxLen);
  postData1D.append('min_len', minLen);
  postData1D.append('num_primers', numPrimer);
  postData1D.append('is_num_primers', isNumPrimer);
  postData1D.append('is_check_t7', isCheckT7);
  return postData1D;
};


export default connect(
  (state) => ({ ...(state.input1D) }),
  (dispatch) => ({
    onChangeTag: (event) => dispatch(changeTagAction(event.target.value)),
    onChangeSequence: (event) => dispatch(changeSequenceAction(event.target.value)),

    onChangeTm: (event) => dispatch(changeTmAction(event.target.value)),
    onChangePrimerLen: (event) => dispatch(changePrimerLenAction(event.target.name, event.target.value)),
    onChangeNumPrimer: (event) => dispatch(changeNumPrimerAction(event.target.name, event.target.value || event.target.checked)),
    onChangeCheckT7: (event) => dispatch(changeCheckT7Action(event.target.checked)),

    onBlur: () => dispatch(blur1DAction()),
    onReset: () => dispatch(clear1DAction()),

    onSubmit: (event) => {
      event.preventDefault();
      Promise.resolve(dispatch(blur1DAction()))
      .then(() => {
        dispatch(submit1DinitAction());
        dispatch(showModalAction("waiting server..."));

        let state = store.getState().input1D;
        let postData1D = prepare1Ddata(state);
        fetch('http://127.0.0.1:8000/api/submit/', {
          method: 'POST',
          mode: 'cors',
          body: postData1D,
        })
        .then((response) => (response.json()))
        .then((json) => {
          if (json.error) {
            dispatch(submit1DfailAction());
            dispatch(showModalAction(json.error));
          } else {
            dispatch(submit1DsuccessAction());
            dispatch(showModalAction("running..."));
            dispatch(addResultAction(convertJson1D(json)));
            dispatch(gotoResultAction(json.job_id));
          }

        });
      })
      .catch((err) => { console.log(err); });
    }
  })
)(Design1D);
