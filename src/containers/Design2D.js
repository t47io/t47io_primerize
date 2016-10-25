import { connect } from 'react-redux';

import Design2D from '../components/Design2D';
import { changeSequenceAction, changePrimerAction, addPrimerAction, blur2DAction } from '../states/actions/design2DActions';


export default connect(
  (state) => ({
    sequence: state.input2D.sequence,
    primers: state.input2D.primers,
    ...(state.input2D.options)
  }),
  (dispatch) => ({
    onChangeSequence: (event) => (dispatch(changeSequenceAction(event.target.value))),
    onChangePrimer: (event) => (dispatch(changePrimerAction(event.target.name, event.target.value))),
    onAddPrimer: (event) => (dispatch(addPrimerAction())),


    onBlur: (event) => (dispatch(blur2DAction()))
  })
)(Design2D);
