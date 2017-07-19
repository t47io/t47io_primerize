import React from 'react';

import AsyncBundle from './common/components/AsyncBundle.jsx';

import asyncDesignMain from 'bundle-loader?lazy!./design/containers/index.jsx';
import asyncDesignSide from 'bundle-loader?lazy!./design/containers/SideBar.jsx';
import asyncResultMain from 'bundle-loader?lazy!./result/containers/index.jsx';


const asyncSharedSide = () => (<AsyncBundle loader={asyncDesignSide} />);

const routes = {
  main: [
    {
      path: '/design',
      render: ({ match }) => (
        <AsyncBundle
          loader={asyncDesignMain}
          match={match}
        />
      ),
    },
    {
      path: '/result',
      render: ({ match }) => (
        <AsyncBundle
          loader={asyncResultMain}
          match={match}
        />
      ),
    },
    {
      path: '/tutorial',
      render: () => (<div />),
    },
    {
      path: '/about',
      render: () => (<div />),
    },
  ],
  side: [
    {
      path: '/design',
      render: asyncSharedSide,
    },
    {
      path: '/result',
      render: asyncSharedSide,
    },
    {
      path: '/tutorial',
      render: () => (<div />),
    },
    {
      path: '/about',
      render: () => (<div />),
    },
  ],
};


export default routes;
