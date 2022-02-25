export const GET_REGIONS = 'GET_REGIONS';
export const SET_REGIONS = 'SET_REGIONS';

export interface Region {
  id: string;
  name: string;
};

export interface GetRegionAction {
  type: typeof GET_REGIONS;
};

export interface SetRegionAction {
  type: typeof SET_REGIONS;
  payload: Region[];
};

export type RegionActionType = GetRegionAction | SetRegionAction;
