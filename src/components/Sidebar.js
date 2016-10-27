import React from 'react';
import { Link } from 'react-router'

import { jobTypes, jobStatus } from '../states/constants/status';

const NavLink = (props) => (
  <Link {...props} activeClassName="active" />
);


const ResultItem = ({
  jobId,
  type,
  status,
  data
}) => (
  <li>
    <NavLink to={`/result/${jobId}`} >{data.tag}: #{jobId}; {jobTypes[`${type}`]} {jobStatus[`${status}`]}</NavLink>
  </li>
);
ResultItem.propTypes = {
  jobId: React.PropTypes.string.isRequired,
  type: React.PropTypes.number.isRequired,
  status: React.PropTypes.number.isRequired,
  data: React.PropTypes.object.isRequired
};

const ResultList = ({ resultList }) => (
  <ul>
    {resultList.map((result) => (
      <ResultItem {...result} key={result.jobId} />
    ))}
  </ul>
);
ResultList.propTypes = {
  resultList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};


const Sidebar = ({ resultList }) => (
  <navbar>
    Primerize
    <ul>
      <li><NavLink to="/1d">1D</NavLink></li>
      <li><NavLink to="/2d">2D</NavLink></li>
      <li><NavLink to="/3d">3D</NavLink></li>
      <li>
        <NavLink to="/result">Result</NavLink>
        <ResultList resultList={resultList} />
      </li>
    </ul>
  </navbar>
);
Sidebar.propTypes = {
  resultList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};


export default Sidebar;
