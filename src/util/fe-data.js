import axios from 'axios';
import config from '../config/app';

const getFeData = async () => axios({
  method: 'GET',
  baseURL: config.NON_API_BASE_PATH,
  url: 'fe-data'
});

export default getFeData;
