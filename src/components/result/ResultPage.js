import React from 'react';

import { cleanupJobId } from '../../utilities/regexInputs';


export default class ResultPage extends React.Component {
  static propTypes = {
    jobId: React.PropTypes.string.isRequired,
    json: React.PropTypes.object.isRequired,
    onFetch: React.PropTypes.func.isRequired,
  }


  componentDidMount() {
    if (typeof this.props.json.status === 'undefined') {
      this.props.onFetch(this.props.jobId);
    }
  }


  render() {
    const { jobId, status, type, time, data, result } = this.props.json;

    return (
      <div>
        {JSON.stringify(this.props.json, null, 2)}
      </div>
    );
  }
}
