import 'whatwg-fetch';
import { connect } from 'react-redux';

import Design3D from '../../components/design/Design3D';
import {
  changeTagAction, changeSequenceAction,
  changePrimerAction, addPrimerAction, removePrimerAction,
  changeStructureAction, addStructureAction, removeStructureAction,
  changeOffsetAction, changePosAction, changeLibOptAction, changeNumMutAction, changeFillWTAction, changeIncludeSingleAction,
  drawIllustrationAction, stopIllustrationAction,
  blur3DAction, prepare3DAction, clear3DAction,
  submit3DinitAction, submit3DsuccessAction, submit3DfailAction
} from '../../states/actions/design3DActions';
import { addResultAction, gotoResultAction } from '../../states/actions/resultActions';
import { showModalAction, hideModalAction } from '../../states/actions/uiActions';

import { convertJson3D } from '../sharedFunc';
import store from '../../states/store';


const prepare3Ddata = (state) => {
  let { tag, sequence, primers, structures } = state;
  let { offset, startPos, endPos, libChoice, numMutation, isIncludeSingle, isFillWT } = state.options;

  let postData3D = new URLSearchParams();
  postData3D.append('type', 3);

  postData3D.append('tag', tag);
  postData3D.append('sequence', sequence);
  postData3D.append('primers', primers);
  postData3D.append('structures', structures)
  postData3D.append('offset', offset);
  postData3D.append('min_mut', startPos);
  postData3D.append('max_mut', endPos);
  postData3D.append('lib', libChoice);
  postData3D.append('num_mutations', numMutation);
  postData3D.append('is_single', isIncludeSingle);
  postData3D.append('is_fill_WT', isFillWT);
  return postData3D;
};


export default connect(
  (state) => ({ ...(state.input3D) }),
  (dispatch) => ({
    onChangeTag: (event) => dispatch(changeTagAction(event.target.value)),
    onChangeSequence: (event) => dispatch(changeSequenceAction(event.target.value)),

    onChangePrimer: (event) => dispatch(changePrimerAction(event.target.name, event.target.value)),
    onAddPrimer: (event) => dispatch(addPrimerAction()),
    onRemovePrimer: (event) => dispatch(removePrimerAction(event.target.name)),

    onChangeStructure: (event) => dispatch(changeStructureAction(event.target.name, event.target.value)),
    onAddStructure: (event) => dispatch(addStructureAction()),
    onRemoveStructure: (event) => dispatch(removeStructureAction(event.target.name)),

    onChangeOffset: (event) => dispatch(changeOffsetAction(event.target.value)),
    onChangePos: (event) => dispatch(changePosAction(event.target.name, event.target.value)),
    onChangeLibOpt: (event) => dispatch(changeLibOptAction(event.target.value)),
    onChangeNumMut: (event) => dispatch(changeNumMutAction(event.target.value)),
    onChangeFillWT: (event) => dispatch(changeFillWTAction(event.target.checked)),
    onChangeIncludeSingle: (event) => dispatch(changeIncludeSingleAction(event.target.checked)),

    onBlur: () => {
      Promise.resolve(dispatch(blur3DAction()))
      .then(() => dispatch(drawIllustrationAction()))
      .then(() => dispatch(stopIllustrationAction()))
      .catch((err) => { console.log(err); });
    },
    onReset: () => {
      Promise.resolve(dispatch(clear3DAction()))
      .then(() => dispatch(drawIllustrationAction()))
      .then(() => dispatch(stopIllustrationAction()))
      .catch((err) => { console.log(err); });
    },
    
    onPrepareForm: (event) => dispatch(prepare3DAction()),
    onSubmit: (event) => {
      event.preventDefault();
      Promise.resolve(dispatch(blur3DAction()))
      .then(dispatch(prepare3DAction()))
      .then(() => {
        dispatch(submit3DinitAction());
        dispatch(showModalAction("waiting server..."));

        let state = store.getState().input3D;
        let postData3D = prepare3Ddata(state);
        fetch('http://127.0.0.1:8000/api/submit/', {
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
            console.log(json)
            dispatch(submit3DsuccessAction());
            dispatch(showModalAction("running..."));
            dispatch(addResultAction(convertJson3D(json)));
            dispatch(gotoResultAction(json.job_id));
          }

        });
      })
      .catch((err) => { console.log(err); });
    }
  })
)(Design3D);
