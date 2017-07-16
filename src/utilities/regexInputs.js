const regexSequence = /[ACGTUacgtu\ \n]+/g;
const regexTagName = /[a-zA-Z0-9\ \.\-\_]+/g;
const regexSecStr = /[\.\(\)\[\]]+/g;

const regexJobId = /^([a-fA-F0-9]){0,16}/g;


export const cleanupTagSequence = ({ tag, sequence }) => {
  tag = (tag.match(regexTagName) || []).join('');
  sequence = (sequence.match(regexSequence) || []).join('');
  return { tag, sequence };
};

export const cleanupPrimers = primers => (
  primers.map(primer => ((primer.match(regexSequence) || []).join('')))
);

export const cleanupStructures = structures => (
  structures.map(structure => ((structure.match(regexSecStr) || []).join('')))
);


export const cleanupJobId = jobId => ((jobId.match(regexJobId) || []).join(''));
