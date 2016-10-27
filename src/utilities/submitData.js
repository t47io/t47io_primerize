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
import getData from './getData';

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


const cleanupData = (type, dispatch) => {
  switch (type) {
    case 1:
      dispatch(blur1DAction());
      break;
    case 2:
      dispatch(blur2DAction());
      dispatch(prepare2DAction());
      break;
    case 3:
      dispatch(blur3DAction());
      dispatch(prepare3DAction());
      break;
  }
};

const validateData = (type, state, dispatch) => {
  if (type === 1) {
    let input = state.input1D;
    if (!input.sequence.length) {
      dispatch(showModalAction("no sequence??"));
      dispatch(submit1DfailAction());
      return false;
    }
  } else if (type === 2) {
    let input = state.input2D;
    if (!input.sequence.length) {
      dispatch(showModalAction("no sequence??"));
      dispatch(submit2DfailAction());
      return false;
    } else if (input.primers.length % 2) {
      dispatch(showModalAction("N primer should be even"));
      dispatch(submit2DfailAction());
      return false;
    }
  } else if (type === 3) {
    let input = state.input3D;
    if (!input.sequence.length) {
      dispatch(showModalAction("no sequence??"));
      dispatch(submit3DfailAction());
      return false;
    } else if (input.primers.length % 2) {
      dispatch(showModalAction("N primer should be even"));
      dispatch(submit3DfailAction());
      return false;
    } else if (!input.structures.length) {
      dispatch(showModalAction("at least 1 str"));
      dispatch(submit3DfailAction());
      return false;
    } else if (input.structures.filter((structure) => (structure.length !== input.sequence.length)).length) {
      dispatch(showModalAction("str not same len"));
      dispatch(submit3DfailAction());
      return false;
    }
  }
  return true;
};

const prepareData = (type, state, dispatch) => {
  let postData;
  switch (type) {
    case 1:
      dispatch(submit1DinitAction());
      postData = prepare1Ddata(state.input1D);
      break;
    case 2:
      dispatch(submit2DinitAction());
      postData = prepare2Ddata(state.input2D);
      break;
    case 3:
      dispatch(submit3DinitAction());
      postData = prepare3Ddata(state.input3D);
      break;
  }
  return postData;
};


const handleError = (type, error, dispatch) => {
  dispatch(showModalAction(error));
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
};

const handleSuccess = (type, json, dispatch) => {
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
};


export default (type, dispatch) => {
  Promise.resolve({
    then: (resolve, reject) => {
      cleanupData(type, dispatch);
      resolve(true);
    }
  })
  .then(() => {
    dispatch(showModalAction("waiting server..."));
    let state = store.getState();
    if (!validateData(type, state, dispatch)) { return; }
    let postData = prepareData(type, state, dispatch);

    fetch(`${HOST_PRIMERIZE_SERVER}/api/submit/`, {
      method: 'POST',
      mode: 'cors',
      body: postData,
    })
    .then((response) => (response.json()))
    .then((json) => {
      if (json.error) {
        handleError(type, json.error, dispatch);
      } else {
        handleSuccess(type, json, dispatch);
      }
    });
  })
  .catch((err) => { console.log(err); });
};
