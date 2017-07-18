import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import MainPanel from '../components/MainPanel1D.jsx';
import OptionPanel from '../components/OptionPanel1D.jsx';
import SubmitPanel from '../components/SubmitPanel.jsx';

import {
  changeInput1d,
  blurInput1d,
} from '../actions/1dActions.js';


const Design1D = ({
  tag,
  sequence,
  minTm,
  minLen,
  maxLen,
  primerNum,
  isPrimerNum,
  isCheckT7,
  onChange,
  onBlur,
}) => (
  <div>
    <MainPanel
      tag={tag}
      sequence={sequence}
      onChange={onChange}
      onBlur={onBlur}
    />
    <OptionPanel
      minTm={minTm}
      minLen={minLen}
      maxLen={maxLen}
      primerNum={primerNum}
      isPrimerNum={isPrimerNum}
      isCheckT7={isCheckT7}
      onChange={onChange}
      onBlur={onBlur}
    />
    <SubmitPanel />
  </div>
);

Design1D.propTypes = {
  tag: PropTypes.string,
  sequence: PropTypes.string,
  minTm: PropTypes.number,
  minLen: PropTypes.number,
  maxLen: PropTypes.number,
  primerNum: PropTypes.number,
  isPrimerNum: PropTypes.bool,
  isCheckT7: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
Design1D.defaultProps = {
  tag: '',
  sequence: '',
  minTm: NaN,
  minLen: NaN,
  maxLen: NaN,
  primerNum: NaN,
  isPrimerNum: false,
  isCheckT7: true,
  onChange: () => {},
  onBlur: () => {},
};


const mapStateToProps = state => ({ ...state.design['1d'] });
const mapDispatchToProps = dispatch => ({
  onChange: bindActionCreators(changeInput1d, dispatch),
  onBlur: bindActionCreators(blurInput1d, dispatch),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Design1D);
