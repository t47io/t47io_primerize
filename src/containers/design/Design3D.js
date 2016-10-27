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

import { convertJson3D } from '../../utilities/formatJson';
import { prepare3Ddata } from '../../utilities/prepareData';
import store from '../../states/store';


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
