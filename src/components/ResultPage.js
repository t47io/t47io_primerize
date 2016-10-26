import React from 'react';


export default class ResultPage extends React.Component {
  static propTypes = {

  }

  
  render() {
    return (
      <div>{JSON.stringify(this.props)}</div>
    );
  }
}
