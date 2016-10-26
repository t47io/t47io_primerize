import { connect } from 'react-redux';

import { Modal } from '../components/Modal';
import { clearResultsACtion } from '../states/actions/resultActions';

import { hideModalAction } from '../states/actions/uiActions';


export default connect(
  (state) => ({ ...(state.ui.modal) }),
  (dispatch) => ({
    onClick: () => dispatch(hideModalAction())
  })
)(Modal);
