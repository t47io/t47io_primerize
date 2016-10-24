import React from 'react';


export class InputMinTm extends React.Component {
  constructor(props) {
    super();
    this.state = {tm: props.tm};
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({tm: e.target.value});
  }

  render() {
    return (
      <div>
        Min TM:
        <input type="number" value={this.state.tm} onChange={this.onChange} />
      </div>
    )
  }
}
InputMinTm.propTypes = {tm: React.PropTypes.number};
InputMinTm.defaultProps = {tm: 60};

export class InputPrimerLen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      minLen: props.minLen,
      maxLen: props.maxLen
    };
    this.onMinChange = this.onMinChange.bind(this);
    this.onMaxChange = this.onMaxChange.bind(this);
  }

  onMinChange(e) {
    console.log(e.target)
    this.setState({minLen: Math.min(e.target.value, this.state.maxLen)});
  }
  onMaxChange(e) {
    this.setState({maxLen: Math.max(e.target.value, this.state.minLen)});
  }

  render() {
    return (
      <div>
        Min LEN:
        <input type="number" value={this.state.minLen} onChange={this.onMinChange} />
        Max LEN:
        <input type="number" value={this.state.maxLen} onChange={this.onMaxChange} />
      </div>
    )
  }
}
InputPrimerLen.propTypes = {
  minLen: React.PropTypes.number,
  maxLen: React.PropTypes.number
};
InputPrimerLen.defaultProps = {
  minLen: 15,
  maxLen: 60
};
