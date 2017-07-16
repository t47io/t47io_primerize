import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';


export default connect(
  state => ({ resultList: state.results })
)(Sidebar);
