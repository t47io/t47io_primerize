import { connect } from 'react-redux';

import Design2D from '../components/Design2D';
import {
  changeTagAction, changeSequenceAction,
  changePrimerAction, addPrimerAction, removePrimerAction,
  changeOffsetAction, changePosAction, changeLibOptAction,
  blur2DAction, clear2DAction
} from '../states/actions/design2DActions';


export default connect(
  (state) => ({
    tag: state.input2D.tag,
    sequence: state.input2D.sequence,
    primers: state.input2D.primers,
    ...(state.input2D.options)
  }),
  (dispatch) => ({
    onChangeTag: (event) => (dispatch(changeTagAction(event.target.value))),
    onChangeSequence: (event) => (dispatch(changeSequenceAction(event.target.value))),

    onChangePrimer: (event) => (dispatch(changePrimerAction(event.target.name, event.target.value))),
    onAddPrimer: (event) => (dispatch(addPrimerAction())),
    onRemovePrimer: (event) => (dispatch(removePrimerAction(event.target.name))),

    onChangeOffset: (event) => (dispatch(changeOffsetAction(event.target.value))),
    onChangePos: (event) => (dispatch(changePosAction(event.target.name, event.target.value))),
    onChangeLibOpt: (event) => (dispatch(changeLibOptAction(event.target.value))),

    onBlur: () => (dispatch(blur2DAction())),
    onReset: () => (dispatch(clear2DAction()))
  })
)(Design2D);
