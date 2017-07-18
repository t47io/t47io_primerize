import React from 'react';

import AsyncBundle from './common/components/AsyncBundle.jsx';

import asyncDesignMain from 'bundle-loader?lazy!./design/containers/index.jsx';
import asyncDesignSide from 'bundle-loader?lazy!./design/containers/SideBar.jsx';
import asyncResultMain from 'bundle-loader?lazy!./result/containers/index.jsx';


const routes = {
  main: {
    design: ({ match }) => (
      <AsyncBundle
        loader={asyncDesignMain}
        match={match}
      />
    ),
    result: ({ match }) => (
      <AsyncBundle
        loader={asyncResultMain}
        match={match}
      />
    ),
    tutorial: () => (<div />),
    about: () => (<div />),
  },
  side: {
    design: () => (<AsyncBundle loader={asyncDesignSide} />),
    tutorial: () => (<div />),
    about: () => (<div />),
  },
};


export default routes;
