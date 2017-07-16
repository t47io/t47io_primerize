import {
  HTML_HEADER,
} from './config.js';


export const getZipExt = headers => (
  headers['accept-encoding'].includes('br') ? 'br' : 'gzip'
);
export const getHeader = (req, dev = false) => {
  const encoding = dev ? {} : { 'Content-Encoding': getZipExt(req.headers) };
  return {
    ...HTML_HEADER,
    ...encoding,
  };
};

export const sendErrorResponse = (code) => {
  const err = new Error();
  err.status = code;
  return err;
};
