import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import {
  Avatar,
  Chip,
  IconButton,
  Typography,
} from 'material-ui';
import {
  LightbulbOutline as ChipIcon,
  Help as HelpOnIcon,
  HelpOutline as HelpOffIcon,
} from 'material-ui-icons';
import Collapse from 'material-ui/transitions/Collapse';
import { withStyles } from 'material-ui/styles';

import styles from '../styles/HelpBlock.js';


class HelpBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const {
      title,
      help,
      classes,
      children,
    } = this.props;
    const { expanded } = this.state;
    const HelpIcon = expanded ? HelpOnIcon : HelpOffIcon;

    const titleNode = title ? (
      <div className={classes.row}>
        <div className={classes.flexGrow}>
          {title}
        </div>
        <IconButton onClick={this.handleExpandClick}>
          <HelpIcon />
        </IconButton>
      </div>
    ) : null;
    const bodyNode = title ? (
      <div className={classes.row}>
        {children}
      </div>
    ) : (
      <div className={classes.row}>
        <div className={classes.flexGrow}>
          {children}
        </div>
        <IconButton onClick={this.handleExpandClick}>
          <HelpIcon />
        </IconButton>
      </div>
    );

    return (
      <div>
        {titleNode}
        {bodyNode}
        <div className={classes.row}>
          <Collapse
            in={expanded}
            transitionDuration="auto"
            classes={{
              container: classes.collapse,
            }}
          >
            <Chip
              avatar={(
                <Avatar>
                  <ChipIcon />
                </Avatar>
              )}
              label={(
                <Typography
                  type="caption"
                  className={classes.span}
                >
                  {help}
                </Typography>
              )}
              classes={{
                root: classes.chip,
                label: classes.label,
              }}
            />
          </Collapse>
        </div>
      </div>
    );
  }
}

HelpBlock.propTypes = {
  title: PropTypes.node,
  help: PropTypes.node,
};
HelpBlock.defaultProps = {
  title: null,
  help: null,
};


export default withStyles(styles)(HelpBlock);
