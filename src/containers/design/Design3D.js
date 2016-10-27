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

import { submit3Ddata } from '../../utilities/submitData';


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
      submit3Ddata(dispatch);
    }
  })
)(Design3D);
