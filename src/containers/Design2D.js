import { connect } from 'react-redux';

import Design2D from '../components/Design2D';
import { changeTagAction, changeSequenceAction, changePrimerAction, addPrimerAction, blur2DAction, clear2DAction } from '../states/actions/design2DActions';


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


    onBlur: () => (dispatch(blur2DAction())),
    onReset: () => (dispatch(clear2DAction()))
  })
)(Design2D);
