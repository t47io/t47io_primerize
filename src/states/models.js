export const design1DState = {
  tag: '',
  sequence: '',
  options: {
    tm: 60.0,
    minLen: 15,
    maxLen: 60,
    numPrimer: 0,
    isNumPrimer: false,
    isCheckT7: true
  }
};

export const design2DState = {
  tag: '',
  sequence: '',
  primers: [
    '',
    ''
  ],
  options: {
    offset: 0,
    startPos: 0,
    endPos: 0,
    libChoice: 1
  },
  isRender: false
}

export const design3DState = {
  tag: '',
  sequence: '',
  primers: [
    '',
    ''
  ],
  structure: [
    ''
  ],
  options: {
    offset: 0,
    startPos: 0,
    endPos: 0,
    libChoice: 1,
    isIncludeSingle: false,
    isFillWT: false
  }
}


export const design2DLibChoices = {
  "1": "A->U, U->A, C->G, G->C",
  "2": "A->C, U->C, C->A, G->A",
  "3": "A->G, U->G, C->U, G->U"
};


export const resultsState = [];
