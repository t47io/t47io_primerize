import React from 'react';
import { Link } from 'react-router';

import { jobTypes, jobStatus } from '../../states/constants/status';


const ResultItem = ({
  jobId,
  type,
  status,
  data,
  onRemoveResult,
}) => (
  <li>
    <Link to={`/result/${jobId}`} >{data.tag}: #{jobId}; {jobTypes[`${type}`]} {jobStatus[`${status}`]}</Link>
    <button name={`result_remove_${jobId}`} onClick={onRemoveResult} >x</button>
  </li>
);
ResultItem.propTypes = {
  jobId: React.PropTypes.string.isRequired,
  type: React.PropTypes.number.isRequired,
  status: React.PropTypes.number.isRequired,
  data: React.PropTypes.object.isRequired,
  onRemoveResult: React.PropTypes.func.isRequired,
};

const ResultList = ({
  resultList,
  onRemoveResult,
  onClearResult,
}) => (
  <ul>
    <button onClick={onClearResult} >clear list</button>
    {resultList.map(result => (
      <ResultItem {...result} key={result.jobId} onRemoveResult={onRemoveResult} />
    ))}
  </ul>
);
ResultList.propTypes = {
  resultList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onRemoveResult: React.PropTypes.func.isRequired,
  onClearResult: React.PropTypes.func.isRequired,
};


const ResultSearch = ({
  onSubmit,
  onBlur,
}) => (
  <form action="/submit" method="get" onSubmit={onSubmit}>
    Retrieve JOB:
    <input type="text" name="text" defaultValue={''} onBlur={onBlur} />
    <button type="submit">search</button>
  </form>
);
ResultSearch.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired,
};


const ResultLanding = ({
  resultList,
  onRemoveResult,
  onClearResult,
  onSubmit,
  onBlur,
}) => (
  <div>
    <ResultSearch onSubmit={onSubmit} onBlur={onBlur} />
    <ResultList resultList={resultList} onRemoveResult={onRemoveResult} onClearResult={onClearResult} />
  </div>
);
ResultLanding.propTypes = {
  resultList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onRemoveResult: React.PropTypes.func.isRequired,
  onClearResult: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired,
};


export default ResultLanding;
