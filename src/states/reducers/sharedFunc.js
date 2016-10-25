export const cleanupTagSequence = ({ tag, sequence }) => {
  tag = (tag.match(/[a-zA-Z0-9\ \.\-\_]+/g) || []).join('');
  sequence = (sequence.match(/[ACGTUacgtu\ \n]+/g) || []).join('');
  return { tag, sequence };  
};

export const cleanupPrimers = (primers) => (
  primers.map((primer) => ((primer.match(/[ACGTUacgtu\ \n]+/g) || []).join('')))
);


