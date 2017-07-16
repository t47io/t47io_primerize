const fixPrimerIndex = (primer_set) => {
  const primers = {};
  for (const key of Object.keys(primer_set)) {
    primers[`${parseInt(key, 10) + 1}`] = primer_set[key];
  }
  return primers;
};


const renameParams1D = params => ({
  tm: params.min_Tm,
  minLen: params.min_len,
  maxLen: params.max_len,
  numPrimer: params.num_primers,
  isNumPrimer: params.is_num_primers,
  isCheckT7: params.is_check_t7,
});

const renameParams2D = params => ({
  offset: params.offset,
  startPos: params.min_muts,
  endPos: params.max_muts,
  libChoice: params.which_lib[0],
});

const renameParams3D = params => ({
  ...(renameParams2D(params)),
  numMutation: params.num_mutations,
  isFillWT: params.is_fill_WT,
  isIncludeSingle: params.is_single,
});


export const convertJson1D = (json) => {
  let newJson = {
    ...json,
    jobId: json.job_id,
    data: {
      ...(json.data),
      params: renameParams1D(json.data.params),
    },
  };
  delete newJson.job_id;

  if (newJson.result.length) {
    newJson = {
      ...newJson,
      result: {
        ...(json.result),
        primer_set: fixPrimerIndex(json.result.primer_set),
      },
    };
  }
  return newJson;
};

export const convertJson2D = (json) => {
  let newJson = {
    ...json,
    jobId: json.job_id,
    data: {
      ...(json.data),
      params: renameParams2D(json.data.params),
    },
    result: {
      ...(json.result),
      primer_set: fixPrimerIndex(json.result.primer_set),
    },
  };
  delete newJson.job_id;

  if (Object.keys(newJson.result).length > 1) {
    newJson = {
      ...newJson,
    };
  }
  return newJson;
};

export const convertJson3D = (json) => {
  let newJson = {
    ...json,
    jobId: json.job_id,
    data: {
      ...(json.data),
      params: renameParams3D(json.data.params),
    },
    result: {
      ...(json.result),
      primer_set: fixPrimerIndex(json.result.primer_set),
    },
  };
  delete newJson.job_id;

  if (Object.keys(newJson.result).length > 1) {
    newJson = {
      ...newJson,
    };
  }
  return newJson;
};
