export const prepare1Ddata = (state) => {
  let { tag, sequence } = state;
  let { tm, minLen, maxLen, numPrimer, isNumPrimer, isCheckT7 } = state.options;

  let postData1D = new URLSearchParams();
  postData1D.append('type', 1);

  postData1D.append('tag', tag);
  postData1D.append('sequence', sequence);
  postData1D.append('min_Tm', tm);
  postData1D.append('max_len', maxLen);
  postData1D.append('min_len', minLen);
  postData1D.append('num_primers', numPrimer);
  postData1D.append('is_num_primers', isNumPrimer);
  postData1D.append('is_check_t7', isCheckT7);
  
  return postData1D;
};


export const prepare2Ddata = (state) => {
  let { tag, sequence, primers } = state;
  let { offset, startPos, endPos, libChoice } = state.options;

  let postData2D = new URLSearchParams();
  postData2D.append('type', 2);

  postData2D.append('tag', tag);
  postData2D.append('sequence', sequence);
  postData2D.append('primers', primers);
  postData2D.append('offset', offset);
  postData2D.append('min_mut', startPos);
  postData2D.append('max_mut', endPos);
  postData2D.append('lib', libChoice);

  return postData2D;
};


export const prepare3Ddata = (state) => {
  let postData3D = prepare2Ddata(state);
  postData3D.set('type', 3);

  let { structures } = state;
  let { numMutation, isIncludeSingle, isFillWT } = state.options;
  postData3D.append('structures', structures);
  postData3D.append('num_mutations', numMutation);
  postData3D.append('is_single', isIncludeSingle);
  postData3D.append('is_fill_WT', isFillWT);

  return postData3D;
};

