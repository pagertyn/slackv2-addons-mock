import Pretender from 'pretender';

import feDataPretender from '../features/fe-data/pretender';
import navbarPretender from '../features/navbar/pretender';
import segmentPretender from '../features/segment/pretender';

export const init = () => {
  const server = new Pretender(
    feDataPretender,
    navbarPretender,
    segmentPretender
  );

  server.handledRequest = function handledRequest(verb, path, request) {
    console.info(`[Pretender] ${verb} ${path}`, request);
  };
};

export default init;
