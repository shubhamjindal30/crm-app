import { timeout } from '../../utilities';
import { regions } from '../DATA';
import { Region } from './types';

const getRegions = async () => {
  await timeout(200);
  return { data: regions as Region[] };
};

export { getRegions };
