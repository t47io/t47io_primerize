import React from 'react';

import { cleanupJobId } from '../../utilities/regexInputs';


// export default class ResultPage extends React.Component {
//   static propTypes = {

//   }

  
//   render() {
//     if (cleanupJobId(jobId).length !== 16) {
//       return (
//         <div>404 NOT FOUND</div>
//       );
//     } else {
//       return (
//         <div>{jobId}</div>
//       );
//     }
//   }
// }


const ResultPage = ({
  jobId,
  status,
  type,
  time,
  data,
  result
}) => {
  if (cleanupJobId(jobId).length !== 16) {
    return (
      <div>404 NOT FOUND</div>
    );
  } else {
    return (
      <div>
        {jobId}
        {status}
        {type}
      </div>
    );
  }
};
ResultPage.propTypes = {

};

export default ResultPage;