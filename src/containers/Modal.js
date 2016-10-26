import { connect } from 'react-redux';

import { Modal } from '../components/Modal';
import { hideModalAction } from '../states/actions/uiActions';


export default connect(
  (state) => ({ ...(state.ui.modal) }),
  (dispatch) => ({
    onClick: () => dispatch(hideModalAction())
  })
)(Modal);
