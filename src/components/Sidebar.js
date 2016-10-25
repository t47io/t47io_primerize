import React from 'react';
import { Link } from 'react-router'


const NavLink = (props) => (
  <Link {...props} activeClassName="active" />
);


const ResultItem = ({
  jobId
}) => (
  <li><NavLink to="/result/{jobId}" >{jobId}</NavLink></li>
);
ResultItem.PropTypes = {
  jobId: React.PropTypes.string.isRequired
};

const ResultList = ({
  resultList,
  onClearResult
}) => (
  <ul>
    {resultList.map((result) => (
      <ResultItem {...result} key={result.jobId} />
    ))}
    <button onClick={onClearResult} >clear list</button>
  </ul>
);
ResultList.PropTypes = {
  resultList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onClearResult: React.PropTypes.func.isRequired
};


const Sidebar = ({
  resultList,
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
        <ResultList resultList={resultList} onClearResult={onClearResult} />
      </li>
    </ul>
  </navbar>
);
Sidebar.PropTypes = {
  resultList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onClearResult: React.PropTypes.func.isRequired
};


export default Sidebar;
