import { update_scan_results } from "./constants";

const initialState = {
    scanResults: null,
};
  
export const scanReducer = (state = initialState, action) => {
    switch (action.type) {
        case update_scan_results:
        return {
            ...state,
            scanResults: action.payload,
        };
        default:
        return state;
    }
};
