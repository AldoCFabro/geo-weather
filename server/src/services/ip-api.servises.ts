import axios from 'axios';
import { configApp } from '../config/app.config';

export const getLocation = async () => {
  try {
    const { url: urlIpApi } = configApp.ipApi;
    const { data: location } = await axios.get(urlIpApi);
    if (!location) {
      throw new Error('locations.not-found');
    }
    return location;
  } catch (error) {
    return error;
  }
};
