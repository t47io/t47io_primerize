import 'whatwg-fetch';

import {
  blur1DAction,
  submit1DinitAction, submit1DsuccessAction, submit1DfailAction
} from '../states/actions/design1DActions';
import {
  blur2DAction, prepare2DAction,
  submit2DinitAction, submit2DsuccessAction, submit2DfailAction
} from '../states/actions/design2DActions';
import {
  blur3DAction, prepare3DAction,
  submit3DinitAction, submit3DsuccessAction, submit3DfailAction
} from '../states/actions/design3DActions';
import { addResultAction, gotoResultAction, getResultAction, updateResultAction } from '../states/actions/resultActions';
import { showModalAction, hideModalAction } from '../states/actions/uiActions';

import { prepare1Ddata, prepare2Ddata, prepare3Ddata } from '../utilities/prepareData';
import { convertJson1D, convertJson2D, convertJson3D } from './formatJson';

import { HOST_PRIMERIZE_SERVER } from '../config';
import store from '../states/store';


const pollGetJson = (seqLen, jobId, dispatch) => {
  let interval = Math.max(seqLen * 4, 2000);

  let poll = setInterval(() => {
    fetch(`${HOST_PRIMERIZE_SERVER}/api/result/?job_id=${jobId}`, {
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
};


export const submit1Ddata = (dispatch) => {
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
        pollGetJson(json.data.sequence.length, json.job_id, dispatch);
      }
    });
  })
  .catch((err) => { console.log(err); });
};


export const submit2Ddata = (dispatch) => {
  Promise.resolve(dispatch(blur2DAction()))
  .then(dispatch(prepare2DAction()))
  .then(() => {
    dispatch(submit2DinitAction());
    dispatch(showModalAction("waiting server..."));

    let state = store.getState().input2D;
    let postData2D = prepare2Ddata(state);
    fetch(`${HOST_PRIMERIZE_SERVER}/api/submit/`, {
      method: 'POST',
      mode: 'cors',
      body: postData2D,
    })
    .then((response) => (response.json()))
    .then((json) => {
      if (json.error) {
        dispatch(submit2DfailAction());
        dispatch(showModalAction(json.error));
      } else {
        dispatch(submit2DsuccessAction());
        dispatch(showModalAction("running..."));
        dispatch(addResultAction(convertJson2D(json)));
        dispatch(gotoResultAction(json.job_id));
        dispatch(getResultAction(json.job_id));
        pollGetJson(json.data.sequence.length, json.job_id, dispatch);
      }
    });
  })
  .catch((err) => { console.log(err); });
};


export const submit3Ddata = (dispatch) => {
  Promise.resolve(dispatch(blur3DAction()))
  .then(dispatch(prepare3DAction()))
  .then(() => {
    dispatch(submit3DinitAction());
    dispatch(showModalAction("waiting server..."));

    let state = store.getState().input3D;
    let postData3D = prepare3Ddata(state);
    fetch(`${HOST_PRIMERIZE_SERVER}/api/submit/`, {
      method: 'POST',
      mode: 'cors',
      body: postData3D,
    })
    .then((response) => (response.json()))
    .then((json) => {
      if (json.error) {
        dispatch(submit3DfailAction());
        dispatch(showModalAction(json.error));
      } else {
        dispatch(submit3DsuccessAction());
        dispatch(showModalAction("running..."));
        dispatch(addResultAction(convertJson3D(json)));
        dispatch(gotoResultAction(json.job_id));
        dispatch(getResultAction(json.job_id));
        pollGetJson(json.data.sequence.length, json.job_id, dispatch);
      }
    });
  })
  .catch((err) => { console.log(err); });
};
