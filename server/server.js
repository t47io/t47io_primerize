import colors from 'colors';
import express from 'express';

import {
  PUBLIC_PATH,
  PORT,
} from './env.js';
import {
  CACHE_MAX_AGE,
} from './config.js';
import middlewares from './middleware.js';
import routes from './route.js';


const app = express();
app.disable('x-powered-by');
app.listen(PORT, () => console.log(`${colors.rainbow('t47io Primerize App')} listening on port: ${colors.red(PORT)} ...`));

middlewares.forEach((middleware) => {
  if (Array.isArray(middleware)) {
    app.use(...middleware);
  } else {
    app.use(middleware);
  }
});

app.get('/', routes.main);

app.use(express.static(PUBLIC_PATH, { maxAge: `${CACHE_MAX_AGE * 5} days` }));
