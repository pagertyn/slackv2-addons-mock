import Pretender from 'pretender';

import feDataPretender from './fe-data';
import navbarPretender from './navbar';

export const init = () => {
  const server = new Pretender(
    feDataPretender,
    navbarPretender
  );

  server.handledRequest = function handledRequest(verb, path, request) {
    console.info(`[Pretender] ${verb} ${path}`, request);
  };
};

export default init;
