import 'whatwg-fetch';
import { connect } from 'react-redux';

import Design1D from '../../components/design/Design1D';
import {
  changeTagAction, changeSequenceAction,
  changeTmAction, changePrimerLenAction, changeNumPrimerAction, changeCheckT7Action,
  blur1DAction, clear1DAction,
  submit1DinitAction, submit1DsuccessAction, submit1DfailAction
} from '../../states/actions/design1DActions';
import { addResultAction, gotoResultAction, getResultAction, updateResultAction } from '../../states/actions/resultActions';
import { showModalAction, hideModalAction } from '../../states/actions/uiActions';

import { convertJson1D } from '../../utilities/formatJson';
import { prepare1Ddata } from '../../utilities/prepareData';
import { HOST_PRIMERIZE_SERVER } from '../../config';
import store from '../../states/store';


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
        fetch(`${HOST_PRIMERIZE_SERVER}/api/submit/`, {
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
            dispatch(getResultAction(json.job_id));

            let interval = Math.max(json.data.sequence.length * 4, 2000);
            let poll = setInterval(() => {
              fetch(`${HOST_PRIMERIZE_SERVER}/api/result/?job_id=${json.job_id}`, {
                method: 'GET',
                mode: 'cors',
              })
              .then((response) => (response.json()))
              .then((json) => {
                if (json.status !== "1") {
                  clearTimeout(poll);
                  dispatch(updateResultAction(convertJson1D(json)));
                }
              });
            }, interval);
          }

        });
      })
      .catch((err) => { console.log(err); });
    }
  })
)(Design1D);
