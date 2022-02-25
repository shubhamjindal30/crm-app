import { GET_REGIONS, SET_REGIONS, Region, GetRegionAction, SetRegionAction } from './types';

export const getRegions = (): GetRegionAction => ({ type: GET_REGIONS });
export const setRegions = (regions: Region[]): SetRegionAction => ({ type: SET_REGIONS, payload: regions });
