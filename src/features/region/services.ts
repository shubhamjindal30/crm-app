import { timeout } from '../../utils';
import { regions } from '../DATA';
import { Region } from './types';

const getRegions = async () => {
  await timeout(1000);
  return { data: regions as Region[] };
};

export { getRegions };
