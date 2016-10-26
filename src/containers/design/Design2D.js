import 'whatwg-fetch';
import { connect } from 'react-redux';

import Design2D from '../../components/design/Design2D';
import {
  changeTagAction, changeSequenceAction,
  changePrimerAction, addPrimerAction, removePrimerAction,
  changeOffsetAction, changePosAction, changeLibOptAction,
  drawIllustrationAction, stopIllustrationAction,
  blur2DAction, prepare2DAction, clear2DAction,
  submit2DinitAction, submit2DsuccessAction, submit2DfailAction
} from '../../states/actions/design2DActions';
import { addResultAction, gotoResultAction } from '../../states/actions/resultActions';
import { showModalAction, hideModalAction } from '../../states/actions/uiActions';

import { convertJson2D } from '../sharedFunc';
import store from '../../states/store';


const prepare2Ddata = (state) => {
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


export default connect(
  (state) => ({ ...(state.input2D) }),
  (dispatch) => ({
    onChangeTag: (event) => dispatch(changeTagAction(event.target.value)),
    onChangeSequence: (event) => dispatch(changeSequenceAction(event.target.value)),

    onChangePrimer: (event) => dispatch(changePrimerAction(event.target.name, event.target.value)),
    onAddPrimer: (event) => dispatch(addPrimerAction()),
    onRemovePrimer: (event) => dispatch(removePrimerAction(event.target.name)),

    onChangeOffset: (event) => dispatch(changeOffsetAction(event.target.value)),
    onChangePos: (event) => dispatch(changePosAction(event.target.name, event.target.value)),
    onChangeLibOpt: (event) => dispatch(changeLibOptAction(event.target.value)),

    onBlur: () => {
      Promise.resolve(dispatch(blur2DAction()))
      .then(() => dispatch(drawIllustrationAction()))
      .then(() => dispatch(stopIllustrationAction()))
      .catch((err) => { console.log(err); });
    },
    onReset: () => dispatch(clear2DAction()),

    onPrepareForm: (event) => dispatch(prepare2DAction()),
    onSubmit: (event) => {
      event.preventDefault();
      Promise.resolve(dispatch(blur2DAction()))
      .then(dispatch(prepare2DAction()))
      .then(() => {
        dispatch(submit2DinitAction());
        dispatch(showModalAction("waiting server..."));

        let state = store.getState().input2D;
        let postData2D = prepare2Ddata(state);
        fetch('http://127.0.0.1:8000/api/submit/', {
          method: 'POST',
          mode: 'cors',
          body: postData2D,
        })
        .then((response) => (response.json()))
        .then((json) => {
          if (json.error) {
            dispatch(submit2DfailAction());
            dispatch(showModalAction(json.error));
          } else {
            console.log(json)
            dispatch(submit2DsuccessAction());
            dispatch(showModalAction("running..."));
            dispatch(addResultAction(convertJson2D(json)));
            dispatch(gotoResultAction(json.job_id));
          }

        });
      })
      .catch((err) => { console.log(err); });
    }
  })
)(Design2D);
