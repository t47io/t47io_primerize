import { connect } from 'react-redux';

import Design1D from '../../components/design/Design1D';
import {
  changeTagAction, changeSequenceAction,
  changeTmAction, changePrimerLenAction, changeNumPrimerAction, changeCheckT7Action,
  blur1DAction, clear1DAction,
  submit1DinitAction, submit1DsuccessAction, submit1DfailAction
} from '../../states/actions/design1DActions';

import submitData from '../../utilities/submitData';


export default connect(
  (state) => ({ ...(state.input1D) }),
  (dispatch) => ({
    onChangeTag: (event) => dispatch(changeTagAction(event.target.value)),
    onChangeSequence: (event) => dispatch(changeSequenceAction(event.target.value)),

    onChangeTm: (event) => dispatch(changeTmAction(event.target.value)),
    onChangePrimerLen: (event) => dispatch(changePrimerLenAction(event.target.name, event.target.value)),
    onChangeNumPrimer: (event) => dispatch(changeNumPrimerAction(event.target.name, event.target.value || event.target.checked)),
    onChangeCheckT7: (event) => dispatch(changeCheckT7Action(event.target.checked)),

    onBlur: () => dispatch(blur1DAction()),
    onReset: () => dispatch(clear1DAction()),

    onSubmit: (event) => {
      event.preventDefault();
      submitData(1, dispatch);
    }
  })
)(Design1D);
