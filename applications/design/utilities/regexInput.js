const regex = {
  tag: /[a-zA-Z0-9 .\-_]+/g,
  sequence: /[ACGTUacgtu \n]+/g,
  primer: /[ACGTUacgtu \n]+/g,
  structure: /[.()[\]]+/g,
};

const regexInput = (name, value) => {
  const match = value.match(regex[name]) || [];
  return match.join('');
};


export default regexInput;
