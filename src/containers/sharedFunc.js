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

  if (newJson.result.length) {
    newJson = {
      ...newJson,
      result: {

      }
    }
  }
  return newJson;
};
