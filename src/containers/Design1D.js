import { connect } from 'react-redux';

import Design1D from '../components/Design1D';
import { changeSequenceAction, changeTmAction, changePrimerLenAction, changeNumPrimerAction, changeCheckT7Action, blur1DAction } from '../states/actions/design1DActions';


export default connect(
  (state) => ({
    sequence: state.input1D.sequence,
    ...(state.input1D.options)
  }),
  (dispatch) => ({
    onChangeSequence: (event) => (dispatch(changeSequenceAction(event.target.value))),
    onChangeTm: (event) => (dispatch(changeTmAction(event.target.value))),
    onChangePrimerLen: (event) => (dispatch(changePrimerLenAction(event.target.name, event.target.value))),
    onChangeNumPrimer: (event) => (dispatch(changeNumPrimerAction(event.target.name, event.target.value || event.target.checked))),
    onChangeCheckT7: (event) => (dispatch(changeCheckT7Action(event.target.checked))),

    onBlur: (event) => (dispatch(blur1DAction()))
  })
)(Design1D);
