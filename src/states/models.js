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

export const resultsState = [];

export const uiState = {
  modal: {
    text: '',
    isVisible: false    
  }
};


export const jobTypes = {
  "1": "Single Assembly",
  "2": "Mutate-and-Map",
  "3": "Mutation/Rescue"
};

export const jobStatus = {
  "0": "Demo",
  "1": "Running",
  "2": "Success",
  "3": "Fail",
  "4": "Error" 
};


export const design2DLibChoices = {
  "1": "A->U, U->A, C->G, G->C",
  "2": "A->C, U->C, C->A, G->A",
  "3": "A->G, U->G, C->U, G->U"
};

export const design3DLibChoices = {
  "1": "Swap (A:U->U:A, G:C->C:G)",
  "4": "Cross (A:U->C:G, G:C->U:A)",
  "5": "Stable (A:U->C:G, G:C->C:G)"
};

export const design3DNumMutChoices = {
  "1": "Single Mutation",
  "2": "Double Mutations",
  "3": "Triple Mutations"
};

