const regexSequence = /[ACGTUacgtu\ \n]+/g;
const regextTagName = /[a-zA-Z0-9\ \.\-\_]+/g;
const regextSecStr = /[\.\(\)\[\]]+/g;


export const cleanupTagSequence = ({ tag, sequence }) => {
  tag = (tag.match(regextTagName) || []).join('');
  sequence = (sequence.match(regexSequence) || []).join('');
  return { tag, sequence };  
};

export const cleanupPrimers = (primers) => (
  primers.map((primer) => ((primer.match(regexSequence) || []).join('')))
);

export const cleanupStructures = (structures) => (
  structures.map((structure) => ((structure.match(regextSecStr) || []).join('')))
);
