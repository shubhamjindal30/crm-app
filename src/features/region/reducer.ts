import { RegionActionType, SET_REGIONS, Region } from './types';

interface RegionState {
  regions: Region[];
};

const initialState: RegionState = {
  regions: []
};

export default (state = initialState, action: RegionActionType): RegionState => {
  switch (action.type) {
    case SET_REGIONS:
      const { payload } = action;
      return {
        ...state,
        regions: payload
      };
    default:
      return state;
  }
};
