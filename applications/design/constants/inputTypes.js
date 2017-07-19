export const INPUT_TYPES = {
  BOOL: 'bool',
  STR: 'string',
  FLOAT: 'float',
  INT: 'int',
};

export const INPUT_1D_TYPES = {
  tag: INPUT_TYPES.STR,
  sequence: INPUT_TYPES.STR,
  minTm: INPUT_TYPES.FLOAT,
  minLen: INPUT_TYPES.INT,
  maxLen: INPUT_TYPES.INT,
  primerNum: INPUT_TYPES.INT,
  isPrimerNum: INPUT_TYPES.BOOL,
  isCheckT7: INPUT_TYPES.BOOL,
};


export const INPUT_ALL_TYPES = {
  ...INPUT_1D_TYPES,
};
