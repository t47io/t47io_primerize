import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from 'material-ui';
import { ExpandMore as ExpandIcon } from 'material-ui-icons';
import Collapse from 'material-ui/transitions/Collapse';
import { withStyles } from 'material-ui/styles';

import styles from '../styles/AccordionCard.js';


class AccordionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: true };
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const {
      title,
      subheader,
      avatar,
      classes,
      children,
    } = this.props;
    const { expanded } = this.state;

    const expandClassName = classnames(classes.expand, {
      [classes.expandOpen]: expanded,
    });

    return (
      <Card>
        <CardHeader
          title={title}
          subheader={subheader}
          avatar={avatar}
        />
        <CardActions disableActionSpacing>
          <div className={classes.flexGrow} />
          <IconButton
            className={expandClassName}
            onClick={this.handleExpandClick}
          >
            <ExpandIcon />
          </IconButton>
        </CardActions>
        <Collapse
          in={expanded}
          transitionDuration="auto"
          unmountOnExit
        >
          <CardContent>
            {children}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

AccordionCard.propTypes = {
  title: PropTypes.node,
  subheader: PropTypes.string,
  avatar: PropTypes.node,
};
AccordionCard.defaultProps = {
  title: null,
  subheader: '',
  avatar: null,
};


export default withStyles(styles)(AccordionCard);
