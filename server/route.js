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
  main: (req, res) => {
    if (DEBUG) {
      sendHtmlFromCache('main', x => x, req, res);
    } else {
      const userAgent = req.useragent.source.toLowerCase();
      const isBot = (BOT_USER_AGENTS.filter(botUA => userAgent.includes(botUA)).length > 0);
      const isStatic = ('static' in req.query && req.query.static === '1');

      const htmlFile = (isBot || isStatic) ? 'index' : 'main';
      sendHtmlFromDisk(htmlFile, req, res);
    }
  },
};


export default routes;
