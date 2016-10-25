export const cleanupTagSequence = ({ tag, sequence }) => {
  tag = (tag.match(/[a-zA-Z0-9\ \.\-\_]+/g) || []).join('');
  sequence = (sequence.match(/[ACGTUacgtu\ \n]+/g) || []).join('');
  return { tag, sequence };  
};

export const cleanupPrimers = (primers) => {
  return primers.map((primer) => ({
    ...primer,
    sequence: (primer.sequence.match(/[ACGTUacgtu\ \n]+/g) || []).join('')
  }));
};


