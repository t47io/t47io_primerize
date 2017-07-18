import React from 'react';
import PropTypes from 'prop-types';


class AsyncBundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      component: null,
    };
  }

  componentWillMount() {
    this.loadComponentAsync(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loader !== this.props.loader) {
      this.loadComponentAsync(nextProps);
    }
  }

  loadComponentAsync({ loader }) {
    console.log('asyncLoad!');
    loader((component) => {
      this.setState({
        loaded: true,
        component: component.default || component,
      });
    });
  }

  render() {
    const { loaded, component: Component } = this.state;
    return loaded ? (<Component />) : null;
  }
}

AsyncBundle.propTypes = {
  loader: PropTypes.func,
};
AsyncBundle.defaultProps = {
  loader: () => {},
};


export default AsyncBundle;
