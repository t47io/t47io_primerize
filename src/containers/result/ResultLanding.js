import { connect } from 'react-redux';

import ResultLanding from '../../components/result/ResultLanding';


export default connect(
  (state) => ({ ...state.results }),
  (dispatch) => ({

  })
)(ResultLanding);
