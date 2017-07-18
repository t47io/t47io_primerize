import React from 'react';

import AsyncBundle from './common/components/AsyncBundle.jsx';

import asyncDesignMain from 'bundle-loader?lazy!./design/containers/index.jsx';


const routes = {
  main: {
    design: () => (<AsyncBundle loader={asyncDesignMain} />),
    result: () => (<div />),
    tutorial: () => (<div />),
    about: () => (<div />),
  },
  side: {
    design: () => (<div />),
    result: () => (<div />),
    tutorial: () => (<div />),
    about: () => (<div />),
  },
};


export default routes;
