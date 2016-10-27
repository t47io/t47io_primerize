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

import { prepare1Ddata, prepare2Ddata, prepare3Ddata } from './prepareData';
import { convertJson1D, convertJson2D, convertJson3D } from './formatJson';
import { getData } from './getData';

import { HOST_PRIMERIZE_SERVER } from '../config';
import { store } from '../states/store';


const pollGetJson = (seqLen, jobId, dispatch) => {
  let interval = Math.max(seqLen * 4, 2000);

  let poll = setInterval(() => {
    getData(jobId)
    .then((json) => {
      if (json.status !== "1") {
        clearTimeout(poll);
        switch (json.type) {
          case 1:
            dispatch(updateResultAction(convertJson1D(json)));
            break;
          case 2:
            dispatch(updateResultAction(convertJson2D(json)));
            break;
          case 3:
            dispatch(updateResultAction(convertJson3D(json)));
            break;          
        }
      }
    });
  }, interval);
};

const submitData = (type, dispatch) => {
  Promise.resolve(dispatch(blur1DAction()))
  .then(() => {
    dispatch(showModalAction("waiting server..."));
    let state = store.getState(), postData;
    switch (type) {
      case 1:
        dispatch(submit1DinitAction());
        state = state.input1D;
        postData = prepare1Ddata(state);
        break;
      case 2:
        dispatch(submit2DinitAction());
        state = state.input2D;
        postData = prepare2Ddata(state);
        break;
      case 3:
        dispatch(submit3DinitAction());
        state = state.input3D;
        postData = prepare3Ddata(state);
        break;
    }

    fetch(`${HOST_PRIMERIZE_SERVER}/api/submit/`, {
      method: 'POST',
      mode: 'cors',
      body: postData,
    })
    .then((response) => (response.json()))
    .then((json) => {
      if (json.error) {
        dispatch(showModalAction(json.error));
        switch (type) {
          case 1:
            dispatch(submit1DfailAction());
            break;
          case 2:
            dispatch(submit2DfailAction());
            break;
          case 3:
            dispatch(submit3DfailAction());
            break;
        }
      } else {
        dispatch(showModalAction("running..."));
        let newJson;
        switch (type) {
          case 1:          
            dispatch(submit1DsuccessAction());
            newJson = convertJson1D(json);
            break;
          case 2:          
            dispatch(submit2DsuccessAction());
            newJson = convertJson2D(json);
            break;
          case 3:          
            dispatch(submit3DsuccessAction());
            newJson = convertJson3D(json);
            break;
        }
        dispatch(addResultAction(newJson));
        dispatch(gotoResultAction(newJson.jobId));
        dispatch(getResultAction(newJson.jobId));
        pollGetJson(newJson.data.sequence.length, newJson.jobId, dispatch);
      }
    });
  })
  .catch((err) => { console.log(err); });
};


export default submitData;

