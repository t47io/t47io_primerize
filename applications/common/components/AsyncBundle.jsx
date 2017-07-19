import PropTypes from 'prop-types';
import React from 'react';


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
    this.state = { loaded: false };
    loader((component) => {
      this.setState({
        loaded: true,
        component: component.default || component,
      });
    });
  }

  render() {
    const { loaded, component: Component } = this.state;
    const { loader: _, ...prop } = this.props;

    return loaded ? (<Component {...prop} />) : null;
  }
}

AsyncBundle.propTypes = {
  loader: PropTypes.func,
};
AsyncBundle.defaultProps = {
  loader: () => {},
};


export default AsyncBundle;
