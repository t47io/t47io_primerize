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
  structures: [
    ''
  ],
  options: {
    offset: 0,
    startPos: 0,
    endPos: 0,
    libChoice: 1,
    isIncludeSingle: false,
    isFillWT: false
  },
  isRender: false
}

export const resultsState = [];

export const uiState = {
  modal: {
    text: '',
    isVisible: false    
  }
};
