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
    {
      id: 1,
      sequence: ''
    },
    {
      id: 2,
      sequence: ''
    }
  ],
  options: {
    offset: 0,
    startPos: null,
    endPos: null,
    whichLib: 1
  }
}

export const design3DState = {
  tag: '',
  sequence: '',
  primers: [],
  structure: [],
  options: {
    offset: 0,
    startPos: null,
    endPos: null,
    whichLib: 1,
    isIncludeSingle: false,
    isFillWT: false
  }
}


// export const appState = {
//   input: {
//     '1D': design1DState,
//     '2D': design2DState,
//     '3D': design3DState,
//   },
//   output: {

//   }
// }
