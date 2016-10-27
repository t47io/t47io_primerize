import 'whatwg-fetch';

import { HOST_PRIMERIZE_SERVER } from '../config';


export const getData = (jobId) => (
  fetch(`${HOST_PRIMERIZE_SERVER}/api/result/?job_id=${jobId}`, {
    method: 'GET',
    mode: 'cors',
  })
  .then((response) => (response.json()))
);
