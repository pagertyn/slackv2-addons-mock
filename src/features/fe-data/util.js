import axios from 'axios';
import config from '../../config/app';

const getFeData = async () => axios({
  method: 'GET',
  baseURL: config.BASE_PATH,
  url: 'fe-data',
  headers: {
    'X-PagerDuty-Api-Local': 1
  }
});

export default getFeData;
