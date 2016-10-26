const fixPrimerIndex = (primer_set) => {
  let primers = {};
  for (let key of Object.keys(primer_set)) {
    primers[`${parseInt(key, 10) + 1}`] = primer_set[key];
  }
  return primers;
};


export const convertJson1D = (json) => {
  let newJson = {
    ...json,
    jobId: json.job_id,
    data: {
      ...(json.data),
      params: {
        tm: json.data.params.min_Tm,
        minLen: json.data.params.min_len,
        maxLen: json.data.params.max_len,
        numPrimer: json.data.params.num_primers,
        isNumPrimer: json.data.params.is_num_primers,
        isCheckT7: json.data.params.is_check_t7
      }
    }
  };
  delete newJson['job_id'];

  if (newJson.result.length) {
    newJson = {
      ...newJson,
      result: {

      }
    }
  }
  return newJson;
};

export const convertJson2D = (json) => {
  let newJson = {
    ...json,
    jobId: json.job_id,
    data: {
      ...(json.data),
      params: {
        offset: json.data.params.offset,
        startPos: json.data.params.min_muts,
        endPos: json.data.params.max_muts,
        libChoice: json.data.params.which_lib[0]
      }
    },
    result: {
        ...(json.result),
        primers: fixPrimerIndex(json.result.primer_set)
    }
  };
  delete newJson['job_id'];
  delete newJson['result']['primer_set']

  if (Object.keys(newJson.result).length > 1) {
    newJson = {
      ...newJson,
    }
  }
  return newJson;
};

