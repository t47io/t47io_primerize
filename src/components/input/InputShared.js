import React from 'react';

import TextField from 'material-ui/TextField';

import FontIcon from 'material-ui/FontIcon';
import { colors } from '../../theme';


const input_style = { color: colors.main.blue };


const InputTag = ({
  tag,
  onChangeTag,
  onBlur
}) => (
  <div>
    <TextField
      type="text" name="tag"
      hintText="Construct name prefix for primers" 
      floatingLabelText="Name Tag" floatingLabelStyle={input_style}
      fullWidth={true}       
      value={tag}
      onChange={onChangeTag} onBlur={onBlur}
      />
  </div>
);
InputTag.propTypes = {
  tag: React.PropTypes.string.isRequired,
  onChangeTag: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};

const InputSequence = ({
  sequence,
  onChangeSequence,
  onBlur
}) => (
  <div>
    <p>SEQUENCE: len=<span>{sequence.length}</span></p>
    <TextField
      type="text" name="sequence"
      hintText="Full-length DNA sequence for design"
      floatingLabelText="Sequence" floatingLabelStyle={input_style}
      fullWidth={true} multiLine={true}
      rows={3} rowsMax={5}
      value={sequence}
      onChange={onChangeSequence} onBlur={onBlur} />
  </div>
);
InputSequence.propTypes = {
  sequence: React.PropTypes.string.isRequired,
  onChangeSequence: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};


const InputPrimer = ({
  id,
  primer,
  onChangePrimer,
  onRemovePrimer,
  onBlur
}) => (
  <div>
    <span>{id}</span>
    <input type="text" name={`primer_input_${id}`} value={primer} onChange={onChangePrimer} onBlur={onBlur} />
    <span>len={primer.length}</span>
    <button type="button" name={`primer_remove_${id}`} onClick={onRemovePrimer} >x</button>
  </div>
);
InputPrimer.propTypes = {
  id: React.PropTypes.number.isRequired,
  primer: React.PropTypes.string.isRequired,
  onChangePrimer: React.PropTypes.func.isRequired,
  onRemovePrimer: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};

const InputPrimerList = ({
  primers,
  onChangePrimer,
  onAddPrimer,
  onRemovePrimer,
  onBlur
}) => (
  <div>
    <button type="button" onClick={onAddPrimer} >add primer</button>
    { primers.map((primer, id) => (
        <InputPrimer key={id + 1} id={id + 1} primer={primer} onChangePrimer={onChangePrimer} onRemovePrimer={onRemovePrimer} onBlur={onBlur} />
      )
    ) }
  </div>
);
InputPrimerList.propTypes = {
  primers: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  onChangePrimer: React.PropTypes.func.isRequired,
  onAddPrimer: React.PropTypes.func.isRequired,
  onRemovePrimer: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};


const InputStructure = ({
  id,
  structure,
  onChangeStructure,
  onRemoveStructure,
  onBlur
}) => (
  <div>
    <span>{id}</span>
    <textarea type="text" name={`structure_input_${id}`} value={structure} onChange={onChangeStructure} onBlur={onBlur} />
    <span>len={structure.length}</span>
    <button type="button" name={`structure_remove_${id}`} onClick={onRemoveStructure} >x</button>
  </div>
);
InputStructure.propTypes = {
  id: React.PropTypes.number.isRequired,
  structure: React.PropTypes.string.isRequired,
  onChangeStructure: React.PropTypes.func.isRequired,
  onRemoveStructure: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};

const InputStructureList = ({
  structures,
  onChangeStructure,
  onAddStructure,
  onRemoveStructure,
  onBlur
}) => (
  <div>
    <button type="button" onClick={onAddStructure} >add structure</button>
    { structures.map((structure, id) => (
        <InputStructure key={id + 1} id={id + 1} structure={structure} onChangeStructure={onChangeStructure} onRemoveStructure={onRemoveStructure} onBlur={onBlur} />
      )
    ) }
  </div>
);
InputStructureList.propTypes = {
  structures: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  onChangeStructure: React.PropTypes.func.isRequired,
  onAddStructure: React.PropTypes.func.isRequired,
  onRemoveStructure: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};


export { InputTag, InputSequence, InputPrimerList, InputStructureList };


