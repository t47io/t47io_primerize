import path from 'path';

import {
  PUBLIC_PATH,
  DEBUG,
} from './env.js';
import {
  CACHE_MAX_AGE,
  BOT_USER_AGENTS,
} from './config.js';
import { webpackMiddleware } from './middleware.js';
import {
  getZipExt,
  getHeader,
} from './util.js';


export const sendHtmlFromCache = (name, render, req, res) => {
  const HTML = webpackMiddleware.fileSystem.readFileSync(
    path.join(PUBLIC_PATH, `${name}.html`), 'utf8'
  );
  res.set(getHeader(req, DEBUG)).send(render(HTML));
};
export const sendHtmlFromDisk = (name, req, res) => {
  const ext = getZipExt(req.headers);

  res.sendFile(path.join(PUBLIC_PATH, `${name}.html.${ext}`), {
    headers: getHeader(req, DEBUG),
    maxAge: `${CACHE_MAX_AGE} days`,
  });
};


const routes = {
  design: (req, res) => {
    sendHtmlFromCache('design', x => x, req, res);
  },
};


export default routes;
