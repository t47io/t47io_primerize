import PropTypes from 'prop-types';
import React from 'react';

import { Avatar } from 'material-ui';
import { Create as CardIcon } from 'material-ui-icons';

import AccordionCard from '../../common/components/AccordionCard.jsx';
import InputTag from './main/InputTag.jsx';
import InputSequence from './main/InputSequence.jsx';


const MainPanel1D = ({
  tag,
  sequence,
  onChange,
  onBlur,
}) => (
  <AccordionCard
    title={(
      <span>Sequence</span>
    )}
    subheader="Sequence & Name"
    avatar={(
      <Avatar>
        <CardIcon />
      </Avatar>
    )}
  >
    <InputTag
      value={tag}
      onChange={onChange}
      onBlur={onBlur}
    />
    <InputSequence
      value={sequence}
      onChange={onChange}
      onBlur={onBlur}
    />
  </AccordionCard>
);

MainPanel1D.propTypes = {
  tag: PropTypes.string,
  sequence: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
MainPanel1D.defaultProps = {
  tag: '',
  sequence: '',
  onChange: () => {},
  onBlur: () => {},
};


export default MainPanel1D;
