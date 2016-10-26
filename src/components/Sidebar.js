import React from 'react';
import { Link } from 'react-router'

import { jobTypes, jobStatus } from '../states/models';

const NavLink = (props) => (
  <Link {...props} activeClassName="active" />
);


const ResultItem = ({
  jobId,
  type,
  status,
  tag,
  onRemoveResult
}) => (
  <li>
    <NavLink to="/result/{jobId}" >{tag}: #{jobId}; {jobTypes[type.toString()]} {jobStatus[status.toString()]}</NavLink>
    <button name={`result_remove_${jobId}`} onClick={onRemoveResult} >x</button>
  </li>
);
ResultItem.propTypes = {
  jobId: React.PropTypes.string.isRequired,
  type: React.PropTypes.number.isRequired,
  status: React.PropTypes.number.isRequired,
  tag: React.PropTypes.string.isRequired,
  onRemoveResult: React.PropTypes.func.isRequired
};

const ResultList = ({
  resultList,
  onRemoveResult,
  onClearResult
}) => (
  <ul>
    {resultList.map((result) => (
      <ResultItem {...result} key={result.jobId} onRemoveResult={onRemoveResult} />
    ))}
    <button onClick={onClearResult} >clear list</button>
  </ul>
);
ResultList.propTypes = {
  resultList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onRemoveResult: React.PropTypes.func.isRequired,
  onClearResult: React.PropTypes.func.isRequired
};


const Sidebar = ({
  resultList,
  onRemoveResult,
  onClearResult
}) => (
  <navbar>
    Primerize
    <ul>
      <li><NavLink to="/1d">1D</NavLink></li>
      <li><NavLink to="/2d">2D</NavLink></li>
      <li><NavLink to="/3d">3D</NavLink></li>
      <li>
        <NavLink to="/result">Result</NavLink>
        <ResultList resultList={resultList} onRemoveResult={onRemoveResult} onClearResult={onClearResult} />
      </li>
    </ul>
  </navbar>
);
Sidebar.propTypes = {
  resultList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onRemoveResult: React.PropTypes.func.isRequired,
  onClearResult: React.PropTypes.func.isRequired
};


export default Sidebar;
