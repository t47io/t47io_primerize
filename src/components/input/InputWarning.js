import React from 'react';

import Avatar from 'material-ui/Avatar';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';


const InputWarning = ({
  seqLen,
  styles,
}) => {
  let className = 'good',
    title = '',
    body = '',
    icon = '';
  if (seqLen > 1000) {
    className = 'bad';
    title = 'Long Sequence Input';
    body = (
      <span>
        Your sequence is longer than <u>1000 nt</u>. The runtime exhibits quadratic growth with sequence length. For long inputs, we encourage the user to run the source code locally, which enables more options.
        <br />
        <RaisedButton
          href="https://primerize.stanford.edu/download/"
          target="_blank"
          label="Download"
          secondary
          icon={
            <FontIcon className={`material-icons ${styles.inputLabelIcon}`}>launch</FontIcon>
          }
          style={{ float: 'right' }}
        />
      </span>
    );
    icon = 'block';
  } else if (seqLen > 500) {
    className = 'long';
    title = 'Long Sequence Input';
    body = (<span>Your sequence is longer than <u>500 nt</u>. The runtime exhibits quadratic growth with sequence length. Please make sure you have the <b>JOB_ID</b> written down for retrieval.</span>);
    icon = 'error_outline';
  }

  return (
    <Card className={`${styles.warningCard} ${className}`} >
      <CardHeader
        title={
          <span className={styles.cardTitle}>{title}</span>
          }
        titleStyle={{ fontSize: '18px' }}
        subtitle={body}
        subtitleStyle={{ paddingTop: '4px' }}
        avatar={
          <Avatar
            icon={<FontIcon className="material-icons">{icon}</FontIcon>}
            size={64}
            className={`${styles.warningIcon} ${className}`}
          />
        }
        className={styles.warningPanel}
      />
    </Card>
  );
};
InputWarning.propTypes = {
  seqLen: React.PropTypes.number.isRequired,
  styles: React.PropTypes.object.isRequired,
};


export default InputWarning;
