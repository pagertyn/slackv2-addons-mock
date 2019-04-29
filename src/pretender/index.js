import Pretender from 'pretender';

import feDataPretender from 'src/features/fe-data/pretender';
import navbarPretender from 'src/features/navbar/pretender';
import segmentPretender from 'src/features/segment/pretender';

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
