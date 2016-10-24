import { connect } from 'react-redux';

import Design1D from '../components/Design1D';
import { changeSequence } from '../states/actions/inputActions';


export default connect(
  (state) => ({
    sequence: state.input1D.sequence
  }),
  (dispatch) => ({
    onChangeSequence: (event) => (
      dispatch(changeSequence(event.target.value))
    ),
  })
)(Design1D);
