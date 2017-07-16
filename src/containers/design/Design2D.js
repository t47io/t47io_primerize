import 'whatwg-fetch';
import { connect } from 'react-redux';

import Design2D from '../../components/design/Design2D';
import {
  changeTagAction, changeSequenceAction,
  changePrimerAction, addPrimerAction, removePrimerAction,
  changeOffsetAction, changePosAction, changeLibOptAction,
  drawIllustrationAction, stopIllustrationAction,
  blur2DAction, prepare2DAction, clear2DAction,
  submit2DinitAction, submit2DsuccessAction, submit2DfailAction,
} from '../../states/actions/design2DActions';

import submitData from '../../utilities/submitData';


export default connect(
  state => ({ ...(state.input2D) }),
  dispatch => ({
    onChangeTag: event => dispatch(changeTagAction(event.target.value)),
    onChangeSequence: event => dispatch(changeSequenceAction(event.target.value)),

    onChangePrimer: event => dispatch(changePrimerAction(event.target.name, event.target.value)),
    onAddPrimer: event => dispatch(addPrimerAction()),
    onRemovePrimer: event => dispatch(removePrimerAction(event.target.name)),

    onChangeOffset: event => dispatch(changeOffsetAction(event.target.value)),
    onChangePos: event => dispatch(changePosAction(event.target.name, event.target.value)),
    onChangeLibOpt: event => dispatch(changeLibOptAction(event.target.value)),

    onBlur: () => {
      Promise.resolve(dispatch(blur2DAction()))
      .then(() => dispatch(drawIllustrationAction()))
      .then(() => dispatch(stopIllustrationAction()))
      .catch((err) => { console.log(err); });
    },
    onReset: () => {
      Promise.resolve(dispatch(clear2DAction()))
      .then(() => dispatch(drawIllustrationAction()))
      .then(() => dispatch(stopIllustrationAction()))
      .catch((err) => { console.log(err); });
    },

    onPrepareForm: event => dispatch(prepare2DAction()),
    onSubmit: (event) => {
      event.preventDefault();
      submitData(2, dispatch);
    },
  })
)(Design2D);
