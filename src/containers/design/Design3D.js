import 'whatwg-fetch';
import { connect } from 'react-redux';

import Design3D from '../../components/design/Design3D';


import { convertJson3D } from '../sharedFunc';
import store from '../../states/store';


const prepare1Ddata = (state) => {
};


export default connect(
  (state) => ({ ...(state.input3D) }),
  (dispatch) => ({
  })
)(Design3D);
